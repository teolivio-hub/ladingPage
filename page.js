export default function AffiliateLandingPage() { return ( <div className="min-h-screen bg-black text-white font-sans"> {/* Hero Section */} <section className="relative overflow-hidden"> <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent blur-3xl" />

<div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm mb-6 border border-white/10">
          🔥 Viral Product Recommendation
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Discover <span className="text-orange-400">Trending</span> Products Before Everyone Else
        </h1>

        <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
          Handpicked viral products with unbeatable prices. Trusted by thousands of buyers every single day.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://shopee.co.id/"
            className="px-7 py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 transition text-lg font-semibold shadow-2xl"
          >
            Shop Now
          </a>

          <a
            href="https://shopee.co.id/"
            className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition text-lg"
          >
            View Reviews
          </a>
        </div>

        <div className="flex gap-8 mt-10 text-sm text-gray-400">
          <div>
            <div className="text-2xl font-bold text-white">50K+</div>
            Happy Buyers
          </div>
          <div>
            <div className="text-2xl font-bold text-white">4.9★</div>
            Product Rating
          </div>
          <div>
            <div className="text-2xl font-bold text-white">24H</div>
            Fast Shipping
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 p-1 rounded-[2rem] shadow-2xl">
          <div className="bg-zinc-900 rounded-[2rem] p-4">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
              alt="viral product"
              className="rounded-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="absolute -bottom-6 -left-6 bg-white text-black px-5 py-4 rounded-2xl shadow-2xl">
          <div className="text-sm">Today Deals</div>
          <div className="font-bold text-2xl">Up to 70% OFF</div>
        </div>
      </div>
    </div>
  </section>

  {/* Products */}
  <section id="products" className="max-w-6xl mx-auto px-6 py-20">
    <div className="flex items-center justify-between mb-10">
      <div>
        <h2 className="text-4xl font-bold">Trending Products</h2>
        <p className="text-gray-400 mt-2">Best selling products this week</p>
      </div>

      <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
        Explore More
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: 'Anti Theft Pocket Pants',
          price: '$19.99',
          image:
            'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop',
        },
        {
          name: 'Smart Hidden Wallet Shoes',
          price: '$24.99',
          image:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
        },
        {
          name: 'Portable Mini Blender',
          price: '$15.99',
          image:
            'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop',
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-[1.02] transition duration-300 shadow-2xl"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-72 object-cover"
          />

          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <span className="text-orange-400 font-bold">{item.price}</span>
            </div>

            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Viral product with premium quality and thousands of positive reviews.
            </p>

            <button className="w-full mt-6 py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 transition font-semibold text-lg">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Reviews */}
  <section id="reviews" className="bg-zinc-950 border-y border-white/10">
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-14">
        What Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          'The quality is amazing and shipping was super fast.',
          'Honestly one of the best viral products I have ever bought.',
          'Looks exactly like the video ads. Totally worth it.',
        ].map((review, index) => (
          <div
            key={index}
            className="bg-black border border-white/10 rounded-3xl p-8"
          >
            <div className="text-orange-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-300 leading-relaxed">{review}</p>

            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
              <div>
                <div className="font-semibold">Verified Buyer</div>
                <div className="text-sm text-gray-500">Real Customer</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="max-w-5xl mx-auto px-6 py-24 text-center">
    <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] p-12 shadow-2xl">
      <h2 className="text-5xl font-bold leading-tight">
        Limited Time Deals Available Now
      </h2>

      <p className="text-white/80 mt-5 text-lg max-w-2xl mx-auto">
        Don’t miss today’s hottest products before prices go up again.
      </p>

      <button className="mt-8 px-8 py-5 rounded-2xl bg-black hover:bg-zinc-900 transition text-lg font-semibold shadow-xl">
        View Viral Products
      </button>
    </div>
  </section>
</div>

) }
