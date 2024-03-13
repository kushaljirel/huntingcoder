import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";

export async function GET(req) {
  try {
    const slugquery = await req.nextUrl.searchParams.get("slug");
    // this is another way of getting search parameters
    // const { searchParams } = new URL(request.url)
    // const yourId = searchParams.get(“slug”)
    let count = await req.nextUrl.searchParams.get("count");
    count = parseInt(count)
    let files = await fs.promises.readdir(
      `blogdata/`,
      "utf-8"
    );
    const allcount = files.length;
    files = files.slice(0, count)
    let fileList = []
    for (let index = 0; index < files.length; index++) {
        const currentFile = files[index];
        let fileInfo = await fs.promises.readFile(`blogdata/${currentFile}`, "utf-8");
        fileInfo = JSON.parse(fileInfo)
        fileList.push(fileInfo)
        
    }
    return NextResponse.json({fileList, allcount});
  } catch (err) {
    return NextResponse.json({ error: "error occured" });
  }
}
