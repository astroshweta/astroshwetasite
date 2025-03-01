import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { packages } from '@/app/utils/constants';



const Packages = () => {
  return (
      <section className="mt-[140px] mb-7.5" id="packages">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-xl-12">
                      <SectionTitle className="text-center">
                          <SectionTitle.Title>Services Offered</SectionTitle.Title>
                            <SectionTitle.Title>Choose your plan to know more</SectionTitle.Title>
                            <br/>
                      </SectionTitle>
                  </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-7.5 mt-15">
                  {
                      packages.map(({ description, id, price, title }) =>
                          <Card key={id} title={title} description={description} price={price} id={id} />
                      )
                  }
              </div>
          </div>
      </section>

  )
}

export default Packages;