import "./../../App.css";

export default function CancellationPolicy() {
  return (
    <section className="py-48 bg-white text-dark">
      <div className="container py-48 shadow-sm bg-primary-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center mb-4 fs-1 ">New Cancellation Policy </h2>
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <p className="mb-4 text-muted">
                  As a courtesy to other guests and myself as your provider, I
                  kindly ask that you provide a minimum of{" "}
                  <strong>48 hours’ notice</strong> for any cancellations or
                  rescheduling.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2 text-muted">
                    <strong>Within 48 Hours:</strong> 50% of the service cost
                    will be charged.
                  </li>
                  <li className="mb-2 text-muted">
                    <strong>
                      Same-Day Cancellations / Rescheduling / No-Shows:
                    </strong>{" "}
                    Full service cost will be charged.
                  </li>
                </ul>
                <p className="text-muted mb-0">
                  Thank you for your understanding and cooperation!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
