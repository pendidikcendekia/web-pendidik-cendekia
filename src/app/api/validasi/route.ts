import { NextRequest, NextResponse } from "next/server";

const API_URL =
  "https://script.google.com/macros/s/AKfycbx9lewD5QbzG4CF6-3K3tFxh80c5dA7QVE0BuKPQW9J6-GXDbIt-9o53jFfm24FSq1z/exec";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const nama = searchParams.get("nama");
  const email = searchParams.get("email");

  if (!nama && !email) {
    return NextResponse.json(
      { ok: false, error: "Param nama/email kosong" },
      { status: 400 }
    );
  }

  const param = email ? "email" : "nama";
  const value = email || nama;
  const appUrl = `${API_URL}?${param}=${encodeURIComponent(value as string)}`;

  try {
    const res = await fetch(appUrl);
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Gagal terhubung ke sumber data" },
        { status: 502 }
      );
    }
    const json = await res.json();

    const data = Array.isArray(json?.data)
      ? json.data.filter((p: Record<string, unknown>) => {
          const pel = Array.isArray(p.pelatihan) ? p.pelatihan : [];
          return pel.length > 0;
        })
      : [];

    return NextResponse.json({ ok: true, data });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Gagal terhubung ke sumber data" },
      { status: 502 }
    );
  }
}
