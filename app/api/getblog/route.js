import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";

export async function GET(req) {
  try {
    const slug = await req.nextUrl.searchParams.get("slug");
    // this is another way of getting search parameters
    // const { searchParams } = new URL(req.url)
    // const slug = searchParams.get(“slug”)
    let blogData = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
    const parsedBlogData = await JSON.parse(blogData);
    return NextResponse.json(parsedBlogData);
  } catch (err) {
    return NextResponse.json({ error: "No such blog exist" });
  }
}
