import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import fs from "fs";
import path from "path";

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN, 
});

export async function GET() {
  try {
    const rootPath = path.join(process.cwd(), "data", "post.json");
    const appPath = path.join(process.cwd(), "app", "data", "post.json");
    
    let filePath = "";
    if (fs.existsSync(rootPath)) filePath = rootPath;
    else if (fs.existsSync(appPath)) filePath = appPath;

    if (!filePath) return NextResponse.json({ error: "JSON dosyası bulunamadı!" }, { status: 404 });

    const fileContents = fs.readFileSync(filePath, "utf8");
    const posts = JSON.parse(fileContents);

    let count = 0;

    for (const post of posts) {
      // BURAYI EKLEDİK: Terminalde hangi yazının aktarıldığını canlı göreceksin
      console.log(`⏳ Aktarılıyor (${count + 1}/${posts.length}): ${post.title}`);

      const postId = `post-${post.slug}`;
      const catId = post.category ? `cat-${post.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : null;
      
      // ... (kodun geri kalanı aynı)

      if (catId) {
        await writeClient.createIfNotExists({
          _id: catId,
          _type: 'category',
          title: post.category,
        });
      }

      const newPost = {
        _id: postId,
        _type: 'post',
        title: post.title,
        slug: { _type: 'slug', current: post.slug },
        oldContent: post.content,      
        oldImageUrl: post.image,       
        publishedAt: new Date().toISOString(),
        categories: catId ? [{ _type: 'reference', _ref: catId, _key: catId }] : [],
      };

      await writeClient.createIfNotExists(newPost);
      count++;
    }

    return NextResponse.json({ message: `Harika! ${count} adet eski yazı başarıyla Sanity'ye aktarıldı!` });
  } catch (error: any) {
    console.error("Aktarım Hatası:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}