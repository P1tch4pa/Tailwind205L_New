"use client";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { globalsDataContext } from "../layout";
import { Product } from "../data/products";
import { buttonStyles } from "@/components/tailgrids/core/button";
import { Badge } from "@/components/tailgrids/core/badge";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { checkLogin } from "@/utils/login";

export default function Page() {
  const router = useRouter()
    useEffect(() => checkLogin(router, '/carts'), [router])

  const { products, setProducts, carts, setCarts } = useContext(globalsDataContext);

  const removeFromCarts = (product: Product) => {
    // เอาสินค้าออกจากตะกร้า
    setCarts(carts.filter((p: Product) => p.id !== product.id));
    // คืนสินค้ากลับไปที่รายการ
    setProducts([...products, product]);
  };

  const totalCount = carts.length;
  const totalPrice = carts.reduce((sum: number, p: Product) => sum + p.price, 0);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold text-stone-900">ตะกร้าสินค้า</h1>

      {carts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 py-20 text-center">
          <p className="font-medium text-stone-700">ยังไม่มีสินค้าในตะกร้า</p>
          <p className="mt-1 text-sm text-stone-500">เลือกสินค้าที่ต้องการจากหน้าสินค้า</p>
          {/* เปลี่ยน href ให้ตรงกับ route หน้าสินค้าของคุณ */}
          <Link
            href="/products"
            className={buttonStyles({ className: "mt-5 bg-green-500" })}
          >
            ไปเลือกสินค้า
          </Link>
        </div>
      ) : (
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_320px]">
          {/* รายการสินค้า */}
          <ul className="divide-y divide-stone-200 overflow-hidden rounded-xl bg-white ring-1 ring-stone-200">
            {carts.map((product: Product) => (
              <li key={product.id} className="flex items-center gap-4 p-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-stone-100">
                  <Image
                    src={product.thumbnailUrl}
                    alt={product.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm text-stone-700">{product.title}</p>
                  <p className="mt-0.5 font-semibold tabular-nums text-stone-900">
                    ${product.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeFromCarts(product)}
                  className={buttonStyles({ className: "bg-red-500" })}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* สรุปราคา */}
          <aside className="rounded-xl bg-white p-5 ring-1 ring-stone-200 lg:sticky lg:top-6">
            <h2 className="font-semibold text-stone-900">สรุปคำสั่งซื้อ</h2>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-stone-500">จำนวนสินค้า</span>
                <Badge className="bg-yellow-400 text-black text-sm py-2 px-4 rounded-xl">
                  Count: {totalCount} items
                </Badge>
              </div>
              <div className="flex items-center justify-between border-t border-stone-200 pt-3">
                <span className="text-sm text-stone-500">ราคารวม</span>
                <Badge className="bg-red-500 text-white text-sm py-2 px-4 rounded-xl">
                  Price: ${totalPrice.toFixed(2)}
                </Badge>
              </div>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}