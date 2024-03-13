import { NextRequest, NextResponse } from 'next/server'

export function GET(request) {

    const finaldata = {
        name: "kusal jirel",
        hobby: "coding",
    }

    return NextResponse.json(finaldata)
}
