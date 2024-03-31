import React from 'react';

export default function ContactSectionContacts1() {
    return (
        <React.Fragment>
            <>
                <section className="position-relative py-28 bg-white">
  <div className="container">
    <img className="position-absolute top-0 start-0 bottom-0 h-100 w-100" style={{objectFit: 'cover'}} src="pstls-assets/images/contacts/pink-shadows.png" alt="" />
    <div className="position-relative row mb-8 mb-md-24">
      <div className="col-12 col-md-6 mb-6 mb-md-0">
        <h2 className="display-4 font-heading">Contact</h2>
      </div>
      <div className="col-12 col-md-6">
        <p className="mb-0 text-muted">Is the answer to your question missing?</p>
        <p>Get in touch with us.</p>
      </div>
    </div>
    <div className="position-relative row">
      <div className="col-12 col-md-6">
        <div className="row mb-12">
          <div className="col-12 col-md-6 mb-12">
            <p className="mb-0 text-muted">E-mail</p>
            <a className="text-decoration-none text-dark" href="mailto:contact@pstls.com">contact@pstls.com</a>
          </div>
          <div className="col-12 col-md-6 mb-12">
            <p className="mb-0 text-muted">Phone</p>
            <p className="mb-0">+1-2020-555-109</p>
          </div>
          <div className="col-6">
            <p className="mb-2 text-muted">Socials</p>
            <div className="d-flex">
              <a className="text-decoration-none" href="#">
                <img src="pstls-assets/images/contacts/facebook.png" alt="" />
              </a>
              <a className="text-decoration-none" href="#">
                <img src="pstls-assets/images/contacts/twitter.png" alt="" />
              </a>
              <a className="text-decoration-none" href="#">
                <img src="pstls-assets/images/contacts/google.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="p-8 bg-white shadow">
          <form action="">
            <div className="row mb-6">
              <div className="col-12 col-md-6 mb-6 mb-md-0">
                <input className="form-control border-top-0 border-start-0 border-end-0" type="text" placeholder="Name" />
              </div>
              <div className="col-12 col-md-6">
                <input className="form-control border-top-0 border-start-0 border-end-0" type="text" placeholder="Surname" />
              </div>
            </div>
            <div className="row mb-6">
              <div className="col-12 col-md-6 mb-6 mb-md-0">
                <input className="form-control border-top-0 border-start-0 border-end-0" type="email" placeholder="Mail address" />
              </div>
              <div className="col-12 col-md-6">
                <input className="form-control border-top-0 border-start-0 border-end-0" type="text" placeholder="Phone number" />
              </div>
            </div>
            <input className="form-control mb-6 border-top-0 border-start-0 border-end-0" type="text" placeholder="Form Topic" />
            <textarea className="form-control mb-6 border-top-0 border-start-0 border-end-0" style={{resize: 'none'}} name="" id="" cols={30} rows={10} placeholder="Form message" defaultValue={""} />
            <button className="btn mb-6 d-flex align-items-center">
              <svg className="me-3" width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8.96959L9.96279 16.5497C8.97817 17.4783 7.64274 18 6.25028 18C4.85782 18 3.52239 17.4783 2.53777 16.5497C1.55315 15.6211 1 14.3616 1 13.0483C1 11.7351 1.55315 10.4756 2.53777 9.54697L10.575 1.96687C11.2314 1.34779 12.1217 1 13.05 1C13.9783 1 14.8686 1.34779 15.525 1.96687C16.1814 2.58595 16.5502 3.4256 16.5502 4.30111C16.5502 5.17662 16.1814 6.01628 15.525 6.63535L7.47904 14.2154C7.15083 14.525 6.70569 14.6989 6.24154 14.6989C5.77738 14.6989 5.33224 14.525 5.00403 14.2154C4.67583 13.9059 4.49144 13.4861 4.49144 13.0483C4.49144 12.6106 4.67583 12.1907 5.00403 11.8812L12.429 4.88674" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="fw-normal">Attach File</span>
            </button>
            <button className="btn w-100 btn-primary">Send Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

