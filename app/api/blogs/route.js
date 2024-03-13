import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";

export async function GET(req) {
  try {
    const slugquery = await req.nextUrl.searchParams.get("slug");
    // this is another way of getting search parameters
    // const { searchParams } = new URL(request.url)
    // const yourId = searchParams.get(“slug”)
 
    let files = await fs.promises.readdir(
      `blogdata/`,
      "utf-8"
    );

    let fileList = []
    for (let index = 0; index < files.length; index++) {
        const currentFile = files[index];
        let fileInfo = await fs.promises.readFile(`blogdata/${currentFile}`, "utf-8");
        fileInfo = JSON.parse(fileInfo)
        fileList.push(fileInfo)
        
    }
    return NextResponse.json(fileList);
  } catch (err) {
    return NextResponse.json({ error: "error occured" });
  }
}
