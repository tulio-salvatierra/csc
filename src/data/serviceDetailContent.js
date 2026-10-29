/**
 * Per-service detail content: article (~700 words) and FAQ for /services/:slug pages.
 * Keyed by service slug (see servicesPageCard.js).
 */
export const serviceDetailContent = {
  "dermaplaning-midland-tx": {
    article: `Dermaplaning is a non invasive skincare treatment that has gained popularity for its ability to reveal smoother, brighter skin by gently exfoliating the top layer of dead skin cells and removing fine vellus hair, often called peach fuzz, from the face. Performed with a sterile, surgical grade scalpel held at a precise angle, the procedure is safe, comfortable, and requires no downtime, making it an ideal add on to facials or a standalone treatment for those seeking a refreshed complexion.

The treatment works by physically sloughing off the outermost layer of dead skin cells that can make skin look dull, rough, or uneven. At the same time, the fine blade removes the soft, short hairs on the face that can trap makeup, dirt, and oil. The result is skin that looks and feels smoother, reflects light more evenly, and allows skincare products and makeup to glide on and absorb more effectively. Many clients notice an immediate glow and a more even texture after a single session.

Dermaplaning is suitable for most skin types, including those with dry or mature skin who want to improve texture and radiance without harsh chemicals or abrasive devices. It can be especially beneficial for individuals who feel their skin looks lackluster or who struggle with product buildup. Because the treatment is purely mechanical and does not involve heat or active ingredients, it is often well tolerated by sensitive skin when performed by a trained professional. However, it is typically not recommended for those with active acne, open breakouts, or certain skin conditions, so a consultation is important.

At Carolina Skin Centre, dermaplaning is performed with care and precision. Each session is tailored to your skin’s needs and can be combined with other treatments such as a [customized facial](/services/facials-midland-tx) or a [HydraFacial](/services/hydrafacial-midland-tx) for enhanced results. After the treatment, your skin may be slightly more sensitive to the sun, so daily sunscreen and gentle skincare are recommended. With regular sessions every three to four weeks, many clients maintain a consistently smooth, luminous complexion that looks healthy and radiant.`,
    faqs: [
      { question: "Is dermaplaning safe for sensitive skin?", answer: "When performed by a licensed professional, dermaplaning is generally safe and well tolerated. It is a gentle, mechanical exfoliation with no chemicals or heat. I assess your skin during consultation to ensure the treatment is appropriate for you." },
      { question: "Will the hair grow back thicker or darker?", answer: "No. Vellus hair is fine and soft; removing it does not change its structure or color. It will grow back at the same rate and texture as before." },
      { question: "How often can I get dermaplaning?", answer: "I typically recommend every three to four weeks to maintain smoothness and support healthy cell turnover without over exfoliating." },
      { question: "Can I wear makeup after dermaplaning?", answer: "Yes. Many clients find makeup applies more smoothly after treatment. I recommend using clean brushes and gentle products for the first 24 hours." },
    ],
    related: ["hydrafacial-midland-tx", "facials-midland-tx"],
  },
  /*
   * Focused pages (Oct 2026 SEO push). These use structured sections instead
   * of a single article. Inline links use [text](/path) and render as
   * internal <Link>s. Copy is a draft for Carolina's review: no prices or
   * timings beyond what the site already states.
   */
  "hydrafacial-midland-tx": {
    h1: "HydraFacial",
    bookLabel: "Book a HydraFacial",
    subhead: "in Midland, TX",
    intro: `A HydraFacial cleans, exfoliates, extracts and hydrates your skin in one visit, with no downtime. It's the treatment I'm asked about most at my studio on W Wadley Ave, and the one I recommend when your skin looks dull, congested or dehydrated and you want to see a difference the same day.

I'm a licensed esthetician with more than 18 years of experience, and every HydraFacial I do starts with a look at your skin so the serums and boosters match what it needs. Clients come in from all over Midland, Odessa and the Permian Basin, and many book it before a big event or keep it as a monthly routine.`,
    highlights: [
      { label: "Session", value: "About 45 to 60 minutes" },
      { label: "Downtime", value: "None, makeup the same day" },
      { label: "Good for", value: "Most skin types, including sensitive" },
      { label: "How often", value: "Monthly is a common rhythm" },
    ],
    stepsTitle: "What happens during your HydraFacial",
    steps: [
      {
        title: "Skin check",
        body: "We talk about your goals and I look at your skin up close, so I can choose the right serums and any boosters.",
      },
      {
        title: "Cleanse and peel",
        body: "A gentle cleanse and exfoliation lift dead skin cells, followed by a mild, adjustable peel to loosen what's sitting in your pores.",
      },
      {
        title: "Extract and hydrate",
        body: "Painless vortex suction clears out pores while hydrating serums go in at the same time. No squeezing, no redness from manual extractions.",
      },
      {
        title: "Fuse and protect",
        body: "Antioxidants and peptides are infused to finish, chosen for your goal, whether that's glow, hydration or firmer-looking skin.",
      },
    ],
    goodForTitle: "Who a HydraFacial is right for",
    goodFor: [
      "Dull, tired or uneven-looking skin that needs a reset",
      "Clogged pores, blackheads and congestion",
      "Dry or dehydrated skin, especially in the West Texas climate",
      "Fine lines you want to soften without needles or downtime",
      "Anyone who wants to look their best before an event",
    ],
    compare: {
      title: "HydraFacial or a customized facial?",
      body: `Choose a HydraFacial when you want consistent, visible results in one session and your main concerns are congestion, dullness or dehydration. If your skin is reactive, you're working through a specific concern like active breakouts, or you'd like a slower, hands-on treatment with massage, a [customized facial](/services/facials-midland-tx) is often the better start. Not sure? Book either one and I'll tell you honestly at your skin check.`,
    },
    pairWith: {
      title: "Pair it for more",
      body: `A HydraFacial combines well with [dermaplaning](/services/dermaplaning-midland-tx) for an extra-smooth finish, and it fits into a [Nano-Needling](/services/nano-needling-midland-tx) plan when texture and fine lines are the focus. I'll suggest a combination only when it makes sense for your skin.`,
    },
    aftercareTitle: "Aftercare",
    aftercare: [
      "Skip harsh exfoliants and retinoids for a day or two",
      "Wear sunscreen daily, your fresh skin is more sun-sensitive",
      "Drink water and keep using a gentle moisturizer",
      "Hold off on saunas and intense workouts for the rest of the day",
    ],
    faqs: [
      { question: "How long does a HydraFacial take?", answer: "A standard HydraFacial takes about 45 to 60 minutes, depending on any add-ons or boosters." },
      { question: "Is there any downtime?", answer: "No. You can go back to your day right away and wear makeup if you like. Most people leave with a visible glow." },
      { question: "How often should I get a HydraFacial?", answer: "Many clients come monthly to keep results going, since skin renews on roughly that cycle. I'll suggest a schedule based on your skin and goals." },
      { question: "Can a HydraFacial help with acne?", answer: "It can help with congestion and clogged pores. For active, inflamed breakouts I may start you with a customized facial instead, and I'll tell you which fits at your skin check." },
      { question: "Is a HydraFacial good for sensitive skin?", answer: "Usually, yes. It's gentle and I adjust the peel strength and serums for sensitive skin. Let me know about any reactions or medications when you book." },
      { question: "Where are you located?", answer: "My studio is at 705 W Wadley Ave, Suite 23, in Midland, TX. Clients also come from Odessa, Andrews, Big Spring and around the Permian Basin." },
    ],
    related: ["facials-midland-tx", "dermaplaning-midland-tx", "nano-needling-midland-tx"],
  },
  "facials-midland-tx": {
    h1: "Customized Facials",
    bookLabel: "Book a facial",
    subhead: "in Midland, TX",
    intro: `No two faces get the same facial at my studio. Every customized facial starts with a skin analysis, then I build the treatment around what your skin needs that day, whether that's deep hydration, calming redness, clearing breakouts or softening the look of fine lines.

I'm a licensed esthetician in Midland, TX with more than 18 years of experience, trained in European and naturopathic-inspired techniques. My facials are relaxing, but they're built for results, and you leave knowing how to keep them going at home.`,
    highlights: [
      { label: "Built for", value: "Your skin type and goals" },
      { label: "Downtime", value: "None for most facials" },
      { label: "Good for", value: "Acne, dryness, aging, sensitivity" },
      { label: "How often", value: "Every 4 to 6 weeks" },
    ],
    stepsTitle: "What happens during your facial",
    steps: [
      {
        title: "Consultation and skin analysis",
        body: "We go over your skin history, routine and goals, and I look closely at your skin to decide what it needs.",
      },
      {
        title: "Cleanse and exfoliate",
        body: "A thorough double cleanse, then exfoliation matched to your skin, gentle for sensitive skin and more active for congestion.",
      },
      {
        title: "Extractions when needed",
        body: "If your pores need it, I do careful extractions to clear congestion without irritating your skin.",
      },
      {
        title: "Massage, mask and serums",
        body: "A relaxing facial massage, then a mask and serums chosen for your goal, finished with moisturizer and sun protection.",
      },
    ],
    goodForTitle: "Facials I customize for",
    goodFor: [
      "Acne-prone and congested skin",
      "Dry, dehydrated or flaky skin",
      "Sensitive skin and redness",
      "Fine lines and early signs of aging",
      "Uneven tone and dullness",
      "First-timers who want an easy introduction to professional skincare",
    ],
    compare: {
      title: "Customized facial or HydraFacial?",
      body: `A customized facial gives me the most room to adapt, which makes it the right choice for sensitive or reactive skin, active breakouts, or when you want a slower, hands-on treatment. If your main goals are congestion, dullness or dehydration and you want a visible same-day result, a [HydraFacial](/services/hydrafacial-midland-tx) may be the better fit. You don't need to know which one to pick; I'll recommend one at your consultation.`,
    },
    pairWith: {
      title: "Add-ons that work well",
      body: `[Dermaplaning](/services/dermaplaning-midland-tx) pairs naturally with a facial for smoother texture and better product absorption, and [lash tinting](/services/lash-tinting-midland-tx) is an easy finishing touch while you're on the table.`,
    },
    aftercareTitle: "After your facial",
    aftercare: [
      "Keep your routine gentle for 24 hours",
      "Use sunscreen every day, especially after exfoliation",
      "Avoid picking at any spots that surface in the next few days",
      "Follow the home-care steps I give you to keep results longer",
    ],
    faqs: [
      { question: "How often should I get a facial?", answer: "For most people, every 4 to 6 weeks keeps skin clear and healthy and prevents buildup. I can adjust that for your skin." },
      { question: "What should I expect at my first facial?", answer: "We'll talk through your skin history and goals, then I'll do a tailored treatment that may include cleansing, exfoliation, extractions, massage and a mask." },
      { question: "Can I get a facial if I have acne?", answer: "Yes. I offer facials for acne-prone skin, with gentle cleansing and careful extractions so breakouts aren't aggravated." },
      { question: "Do you offer facials for sensitive skin?", answer: "Yes. Every facial is customized, and for sensitive skin I use gentle products and techniques that calm and support the skin barrier." },
      { question: "What's the difference between a facial and a HydraFacial?", answer: "A customized facial is hands-on and fully adapted to your skin that day. A HydraFacial uses a specialized device to cleanse, extract and hydrate in a set sequence. Both are great; I'll help you choose." },
      { question: "Where are you located?", answer: "My studio is at 705 W Wadley Ave, Suite 23, in Midland, TX, a short drive for clients in Odessa and around the Permian Basin." },
    ],
    related: ["hydrafacial-midland-tx", "dermaplaning-midland-tx", "lash-tinting-midland-tx"],
  },
  "nano-needling-midland-tx": {
    article: `Nano-Needling is an advanced, non invasive skincare procedure designed to rejuvenate your skin at a cellular level. This cutting edge treatment uses ultra fine nano needles to create microscopic channels on the skin’s surface, enhancing the absorption of serums and stimulating collagen production without the pain or downtime associated with traditional microneedling. At Carolina Skin Centre, I use Nano-Needling to help clients achieve smoother, firmer, and more radiant skin with minimal discomfort and no lengthy recovery.

The nano needles are so fine that they work primarily in the outermost layers of the skin, triggering natural repair and renewal without causing visible wounds or bleeding. This makes the treatment suitable for those who want the benefits of needling, improved texture, reduced appearance of fine lines and pores, and better product penetration, without the intensity of deeper microneedling. I often combine the procedure with targeted serums to maximize results, and many clients see a refreshed glow soon after.

Nano-Needling is ideal for individuals concerned with texture, dullness, fine lines, or uneven tone who prefer a gentle approach. I recommend a consultation to ensure it is right for you and to plan a series of treatments if needed. With consistent care and sun protection, Nano-Needling at Carolina Skin Centre can be a valuable part of your skincare journey in West Texas.`,
    faqs: [
      { question: "Does Nano-Needling hurt?", answer: "Most clients feel only a light prickling or pressure. It is significantly gentler than traditional microneedling and requires no numbing for most people." },
      { question: "Is there downtime after Nano-Needling?", answer: "Typically minimal. You may have slight redness for a short time; I will advise on aftercare and when you can resume normal activities and makeup." },
      { question: "How many sessions do I need?", answer: "Results can be seen after one treatment; a series of sessions is often recommended for optimal improvement. I will suggest a plan during your consultation." },
      { question: "Can Nano-Needling be combined with other treatments?", answer: "Yes. It can complement [facials](/services/facials-midland-tx), [HydraFacials](/services/hydrafacial-midland-tx), or other services. I will schedule and combine treatments safely based on your skin and goals." },
    ],
    related: ["hydrafacial-midland-tx", "facials-midland-tx"],
  },
  "lash-tinting-midland-tx": {
    article: `Lash tinting is a quick, low maintenance way to define your lashes without daily mascara. A semi permanent tint is applied to your natural lashes to darken them from root to tip, so even fine or light colored lashes look fuller and more noticeable.

At Carolina Skin Centre, I begin by cleansing the lash line and protecting the skin under your eyes. The tint is then carefully applied to your lashes while your eyes stay closed, left to process for a few minutes, and gently removed. The service is relaxing and usually takes less than half an hour.

Lash tinting is a good fit if you have light or fine lashes, want to skip mascara on vacation or during workouts, or simply want a polished look when you wake up. I do not offer lash extensions; tinting enhances the lashes you already have. Many clients add it to a [customized facial](/services/facials-midland-tx) or [HydraFacial](/services/hydrafacial-midland-tx) visit.`,
    faqs: [
      { question: "How long does lash tinting last?", answer: "Results typically last about four to six weeks, depending on your natural lash growth cycle." },
      { question: "Does lash tinting hurt?", answer: "No. Your eyes stay closed throughout the service, and most clients find it relaxing." },
      { question: "Do you offer lash extensions?", answer: "No. I offer lash tinting only, which darkens and defines your natural lashes." },
    ],
    related: ["facials-midland-tx", "hydrafacial-midland-tx"],
  },
};

export function getServiceDetailContent(slug) {
  return serviceDetailContent[slug] ?? null;
}
