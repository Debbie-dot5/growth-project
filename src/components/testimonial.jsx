import React from 'react'


// add color white to text




const Testimonial = () => {

    const testimonials = [
        {
            quote: "Our business has seen a significant increase in productivity since we started using the Growth app.",
            name: "Katherine Smith",
            company: "Capodopera",
            width: '400px',
            height: '308.24px'

          },
          {
            quote: "As a small business owner, it's important to have a tool that can help me keep track of everything. The Growth app has been a lifesaver for me, allowing me to manage my contacts, schedule appointments, and track progress all in one place.",
            name: "Jonathan Lee",
            company: "Red Bolt",
            width: '406px',
            height: '452px'

            
          },
          {
            quote: "The dashboards and reporting feature has provided valuable insights into our performance and helped us make data-driven decisions. It's a game changer for us.",
            name: "David Wilson",
            company: "Slide",
            width: '405px',
             height: '360px'

          },
          {
            quote: "Our business has seen a significant increase in productivity since we started using the Growth app.",
            name: "Katherine Smith",
            company: "Capodopera",
            width: '405px',
             height: '299px'
          },
    ]




  return (
    <div>
      <h1 className=' text-4xl md:text-5xl font-medium   text-left mb-12 mt-20 w-full md:w-3/6 tracking-[-1px] '> 
      Don't just take our word for it, see the success
        stories from businesses just like yours.
      </h1>

      <div className=' flex flex-wrap md:flex-nowrap md:gap-4'>
            {testimonials.map((testimonial, index) => (
                <div key={index} 
                style={{width: testimonial.width, height: testimonial.height}}
                  className=' '>
               <div  className='bg-gray-100 px-6 py-8 rounded-2xl overflow-x-hidden'>
               <h3 className="text-lg font-semibold text-gray-800">“{testimonial.quote}”</h3>
                <div>
                <p className="text-sm  pt-10 font-bold text-gray-700">{testimonial.name}</p>
                <span className="text-xs text-gray-600">{testimonial.company}</span>
                </div>
               </div>
              </div>
            ))}            
      </div>
    </div>
  )
}

export default Testimonial
