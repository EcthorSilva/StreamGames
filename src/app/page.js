import Header from '@/components/Header';
import PublisherHighlight from '@/components/PublisherHighlight';
import BannerHighlight from '@/components/BannerHighlight';

import Image from 'next/image';

export const metadata = {
  title: 'Home | StreamGames',
  description: 'Página inicial da loja',
};

export default function Home() {
  return (
    <main>
      <Header />
      {/* Destaques - It’ll blow your mind */}
      <div className="container pb-4">
        <h2 className="pb-2 ps-2">
          <span className="text-body-secondary">It’ll blow your mind.</span>
        </h2>
        <div className="row">
          <div className="col-12">
            <div className="d-flex overflow-auto" style={{ scrollSnapType: 'x mandatory', touchAction: 'pan-x' }} >
              {/* Item 1 */}
              <div className="flex-shrink-0 p-2 card-item">
                <div className="bg-body-tertiary border rounded-3 position-relative">
                  <a href="#" rel="noopener noreferrer" className="text-reset">
                    <Image src="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/6317966c632c3d0015f472ec/q9zx384trfvtixe46opy.jpg" width={300} height={200} className="img-fluid border rounded" alt="Destaque 1" style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    <div className="position-absolute bottom-0 end-0 p-2">
                      <h6 className="text-reset bg-dark bg-opacity-75 p-1 rounded">
                        R$99,99 <span className="badge text-bg-danger">-50%</span>
                      </h6>
                    </div>
                  </a>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex-shrink-0 p-2 card-item">
                <div className="bg-body-tertiary border rounded-3 position-relative">
                  <a href="#" rel="noopener noreferrer" className="text-reset">
                    <Image src="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/623cdb26b88a8a0015c57798/swew2dln6nfzdsmbf2ou.jpg" width={300} height={200} className="img-fluid border rounded" alt="Destaque 2" style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    <div className="position-absolute bottom-0 end-0 p-2">
                      <h6 className="text-reset bg-dark bg-opacity-75 p-1 rounded">
                        R$47,99 <span className="badge text-bg-danger">-60%</span>
                      </h6>
                    </div>
                  </a>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex-shrink-0 p-2 card-item">
                <div className="bg-body-tertiary border rounded-3 position-relative">
                  <a href="#" rel="noopener noreferrer" className="text-reset">
                    <Image
                      src="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/64da95c6d6cc6e0018ccedde/bxhu05h67vulmu5wajpv.jpg" width={300} height={200} className="img-fluid border rounded" alt="Destaque 3" style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    <div className="position-absolute bottom-0 end-0 p-2">
                      <h6 className="text-reset bg-dark bg-opacity-75 p-1 rounded">
                        R$54,50 <span className="badge text-bg-danger">-50%</span>
                      </h6>
                    </div>
                  </a>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex-shrink-0 p-2 card-item">
                <div className="bg-body-tertiary border rounded-3 position-relative">
                  <a href="#" rel="noopener noreferrer" className="text-reset">
                    <Image
                      src="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/610c5eb4c883e602c467759f/kaxtu6uycb6jbbeu78jb.jpg" width={300} height={200} className="img-fluid border rounded" alt="Destaque 4" style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    <div className="position-absolute bottom-0 end-0 p-2">
                      <h6 className="text-reset bg-dark bg-opacity-75 p-1 rounded">
                        R$119,96 <span className="badge text-bg-danger">-60%</span>
                      </h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PublisherHighlight
        title="CAPCOM"
        products={[
          {
            title: "Resident Evil",
            img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/635951f2bdc65c2b68ecb095/banners/etxq8vej3ebm0pz0s5rs.jpg",
            price: "R$47,99",
            discount: "-60%",
          },
          {
            title: "Street Fighter V",
            img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/564c95ef69702d648a00011d/banners/jpoaxzjljzw1wiqot603.jpg",
            price: "R$47,99",
            discount: "-60%",
          },
          {
            title: "Resident Evil Village",
            img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/600f36b1c883e6464c052882/banners/tdgiqqtvxmycwabbatg3.jpg",
            price: "R$47,99",
            discount: "-60%",
          },
          {
            title: "Resident Evil 3",
            img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/5df7db71e8d4f2071032bbd1/banners/bt35weatc5dorv6da9jf.jpg",
            price: "R$47,99",
            discount: "-60%",
          }
        ]}
      />
      <BannerHighlight
        img="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/64a55b9a56062d0016292782/ev6lg4t9pg9whbx4yqma.jpg"
        alt="Banner destaque"
        price="R$99,99"
        discount="-50%"
      />
    </main>
  );
}