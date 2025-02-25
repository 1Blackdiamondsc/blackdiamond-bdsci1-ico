import SectionHeading from '../SectionHeading'

const OurService = ({data}) => {
  return (
    <section className=" section-padding-100-70 d-sec">
      <div className="container">
        <SectionHeading title='OUR SERVICES' text='BDSCI1 Core Services' addWhite={true} />
        <div className="row">
			{data && data.map((item , key) => (
				<div className="col-12 col-md-6 col-lg-4" key={key}>
					<div className="service_single_content text-center mb-100 fadeInUp" data-wow-delay="0.2s">
					  <div className="service_icon">
					    <img draggable="false" src={item.img} alt="" />
					  </div>
					  <h6 className="bold">{item.title}</h6>
					  <p>BlackDiamondSCInc1 Core Services: DEfi Token Decentralized Wallet And Trading Platform.</p>
					</div>
				</div>				
			))}
        </div>
      </div>
    </section>
  );
}

export default OurService
