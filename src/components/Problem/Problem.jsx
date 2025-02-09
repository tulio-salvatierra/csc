import "./Problem.css";

export default function Problem() {
  return (
    <>
      <section className="py-24 h-auto bg-muted d-flex flex-column justify-content-center">
        <p className="p-4 text-left fs-2 w-75 align-self-center mb-10">
          I've learned that without a consistent, expert-backed skincare routine, achieving
          long-term skin health and radiance becomes difficult, leading to
          premature aging and skin concerns and it looks like this:
        </p>
        <div className="parent p-12 justify-content-center mt-11">

          <div className="bg-secondary text-muted rounded-2 p-4 fs-3">
            <p>1. Dull, dry, or breakout-prone skin</p>
          </div>
          <div className="bg-secondary rounded-2 text-muted p-4 fs-3">
            <p>2. Early signs of aging, such as fine lines and loss of elasticity.</p>
          </div>
          <div className="bg-secondary rounded-2 p-4 fs-3 text-muted">
            <p>3. Frequent skin sensitivity or irritation.
            </p>
          </div>
          <div className="bg-secondary rounded-2 p-4 fs-3 text-muted"> 
            <p>4. Difficulty finding the right products or seeing results with their current routine.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
