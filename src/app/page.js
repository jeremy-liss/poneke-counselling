import Image from "next/image";
import Link from 'next/link'

export default function Home() {  

  return (
    <main className="main-color">

      <div className="w-4/5 flex flex-col mx-auto" style={{"height": "80vh"}} >
        <div className="my-auto">
          <p className="absolute text-2xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold w-max m-auto left-0 right-0 mt-12">Pōneke Counselling Collective</p>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 w-4/5 mx-auto">
            <Image
              src="/wellington.png"
              width={430}
              height={100}
            />
            <div className="mt-2 lg:mt-0 flex pr-2">
              <div className="m-auto">
                <p>Counsellors working in Pōneke (Wellington) who take a narrative approach to counselling conversations.</p>
                <br />
                <p>Have a scroll and see if we are the right fit for you :)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 py-5 main-color z-10 w-4/5 mx-auto flex flex-col lg:flex-row lg:col-span-2 justify-between mt-4 lg:mt-16">
        <Link className="lg:px-10 lg:text-2xl font-medium" href="#about-counselling">About Counselling</Link>
        <Link className="lg:px-10 lg:text-2xl font-medium" href="#about-us">About Us</Link>
        <Link className="lg:px-10 lg:text-2xl font-medium" href="#about-groups">About Groups</Link>
      </div>

      <div id="about-counselling" className="container lg:h-screen flex mx-auto">
        <div className="w-4/5 m-auto">
          <p className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold">
            Counselling
          </p>
          <p className="text-xl md:leading-loose mt-10">
            We take a Narrative Therapy approach to counselling. This shapes the questions we ask but also how we view those who chose to meet with me. We view people as experts in their life with knowledge, skills and abilities that problems, difficulties or trauma can obscure from view. We also view the people we meet with as collaborators in the counselling conversation - you know you better than we could ever hope to. Instead our hope is the questions we ask might assist in reducing the influence of what you want less of and making the knowledge, skills and abilities accessible to us in re-claiming your life, values and hopes.
          </p>
        </div>
      </div>

      <div id="about-us" className=" h-screen flex mx-auto">
        <div className="w-4/5 m-auto flex flex-col items-center">
          <p className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold pb-8">
            About us
          </p>
          <Image
            src="/arrow.png"
            width={35}
            height={100}
          />
        </div>
      </div>

      <div className=" h-max flex mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 gap-y-6 w-4/5 m-auto justify-between">
          <p className="col-start-1 col-end-2 text-4xl font-light w-1/2 mb-4">Gabrielle McGimpsey</p>
          <Image
            src="/gabrielle.jpg"
            className="row-start-2 my-auto"
            width={400}
            height={100}
          />
          <div className="row-start-2 lg:border-t lg:border-black">
            <p className="my-4">
              I have lived in Poneke my whole life and love that within 20 mins I can be next to the ocean, on a bush walk or in the city.
            </p>
            <p className="mb-4">
              It feels like it took awhile for me to land in work that connects with my heart but counselling is where I found that connect. I have worked in various creative fields, from graphic design to advertising, before beginning work in support of people. This led me to return to study and complete my Master of Counselling at Waikato University.
            </p>
            <p className="mb-4">
              As a counsellor I have worked with people of all ages from tamariki to Nans. The counselling conversations I have hosted have navigated many of life’s challenges.
            </p>
            <p className="mb-4">
              Outside of the counselling room I love to spend time with my large, loud, vibrant family (I am an Aunty to 11 nieces and nephews) and invest in my self-care of choice which is various reality TV shows.
            </p>
            <p className="mb-4">
              I look forward to meeting with you and hearing about what is important to you in your life and perhaps about what is getting in the way of enjoying those important things.
            </p>
          </div>
          <div className="row-start-3 lg:border-b lg:border-black">
            <p className="mb-4">
              If we meet together our sessions could also include Interactive Drawing Therapy, if of interest to you. I also might, with your interest and consent, write letters following sessions of questions I missed or moments that can be  captured on paper to extend their life.
            </p>
            <p className="mb-4">
              My hope is when you meet with me you will experience manaakitanga, being listened to, respected and safe. When we first meet together we can talk about what that looks like for you and what else might be important to you when coming to counselling.
            </p>
            <p className="mb-4">
              As a counsellor I have worked with people of all ages from tamariki to Nans. The counselling conversations I have hosted have navigated many of life’s challenges.
            </p>
            <p className="mb-4">
            I meet with people of all ages and backgrounds.</p>
            <p className="mb-4">
              Counselling sessions are $100 (incl GST) and sessions are hosted at a space in Wellington CBD.
            </p>
          </div>
          <Image
            src="/pcc.png"
            className="row-start-3 justify-self-end my-auto"
            width={250}
            height={100}
          />
        </div>
      </div>

      <div className="lg:h-screen flex mx-auto mt-10 lg:mt-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 gap-y-6 w-4/5 m-auto justify-between">
          <p className="col-start-2 text-4xl font-light w-1/2 mb-4">Emma White</p>
          <div className="row-start-2 lg:border-t lg:border-black my-auto">
            <p className="my-4">
              Nō Airana ōku tīpuna. He uri tēnei o Tangata Tiriti. I tipu ake
              ahau ki Porirua, engari ki Matairangi tōku kāinga inaianei.
              My people hail from Ireland and I descend from the people
              who came to Aotearoa under Te Tiriti o Waitangi. I grew up
              in Porirua, but now live in Mount Victoria.
            </p>
            <p className="my-4">
              I’m a Student Counsellor in my final year with the University
              of Waikato’s Master of Counselling. My previous work has
              been around domestic and sexual harm, conflict resolution,
              and the performing arts.
            </p>            
            <p className="my-4">
              I love reality tv, swimming at the beach, and my three
              sisters.
            </p>            
            <p className="my-4">
              It’s important to me that my counselling be queer-friendly
            </p>            
            <p className="my-4 pb-4 font-semibold text-right lg:border-b lg:border-black">
              Sorry, I am not currently taking new clients.
            </p>
          </div>
          <Image
            src="/emma.jpg"
            className="row-start-2"
            width={400}
            height={100}
          />
        </div>
      </div>

      <div id="about-groups" className="lg:h-screen mt-10 flex mx-auto">
        <div className="w-4/5 mx-auto">
          <p className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold pb-8">
            Groups
          </p>
          <p className="text-2xl text-center my-auto leading-loose mt-10">
            Coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}
