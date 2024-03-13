import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";

export async function POST(request) {
  const formData = await request.json();
  const name = formData.name;
  const email = formData.email;
  const phone = formData.phone;
  const desc = formData.desc;
  const data = { name, email, phone, desc };
  const stringyData = JSON.stringify(data);
  try {
    const files = await fs.promises.readdir("contactdata");
    const numOfFiles = files.length;
    await fs.promises.writeFile(
      `contactdata/${numOfFiles + 1}.json`,
      stringyData
    );
    console.log("success");
    return NextResponse.json(data);
  } catch (error) {
    console.log("failed");
    console.log(error);
    return NextResponse.json({ error: "failed to get data" });
  }
}
