"use client";
import { useContext, useEffect } from "react";
import { globalsDataContext } from "../layout";
import { Product } from "../data/products";
import Image from "next/image";
import { buttonStyles } from "@/components/tailgrids/core/button";
import { useRouter } from "next/navigation";
import { checkLogin } from "@/utils/login";

export default function Page() {
  const router = useRouter()
    useEffect(() => checkLogin(router, '/products'), [router])
    
  const { products, setProducts, carts, setCarts } = useContext(globalsDataContext);

  const addToCarts = (product: Product) => {
    // เอาสินค้าออกจากรายการ
    setProducts(products.filter((p: Product) => p.id !== product.id));
    // เพิ่มเข้าตะกร้า
    setCarts([...carts, product]);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-stone-900">สินค้าทั้งหมด</h1>
        <p className="mt-1 text-sm text-stone-500">
          เหลือ {products.length} รายการ · ในตะกร้า {carts.length} ชิ้น
        </p>
      </header>

      {products.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 py-20 text-center">
          <p className="font-medium text-stone-700">เพิ่มสินค้าครบทุกรายการแล้ว</p>
          <p className="mt-1 text-sm text-stone-500">ไปที่ตะกร้าเพื่อตรวจสอบรายการของคุณ</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((product: Product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-stone-200 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <Image
                  src={product.thumbnailUrl}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-1 p-3">
                <h3 className="line-clamp-2 min-h-[2.5rem] text-sm leading-5 text-stone-700">
                  {product.title}
                </h3>
                <p className="text-lg font-semibold tabular-nums text-stone-900">
                  ${product.price}
                </p>
              </div>

              <div className="p-3 pt-0">
                <button
                  type="button"
                  onClick={() => addToCarts(product)}
                  className={buttonStyles({ className: "w-full bg-green-500" })}
                >
                  Add to Carts
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}