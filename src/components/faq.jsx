import {useState} from 'react'



const faqs = [
    {
      question: "How does the contact management feature help me keep track of clients and partners?",
      answer:
        "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.",
    },
    {
      question: "Can I customize the dashboards and reporting feature to display the metrics that are most important to my business?",
      answer:
        "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.",
    },
    {
      question: "How does the task management feature help me delegate tasks to my team and track progress?",
      answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.",
    },

    {
        question: "Can I collaborate with my team in real-time using all tools?",
        answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.",
      },

      {
        question: "Is the app available on all devices?",
        answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.",
      },

      {
        question: "How does the app help me stay compliant when working with freelancers and contractors?",
        answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.",
      },
  ];
  

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className='max-w-2xl mx-auto my-12 space-y-4 my-32'>
        <h2 className='text-5xl text-center font-medium leading-10 my-10'>Frequently asked questions</h2>
        <div className='flex '>
           <div className='bg-gray-100 flex justify-center items-center mx-auto gap-6 px-2 py-2 rounded-xl'>
           <p className='bg-custom-blue px-4 py-1.5 text-white rounded'>All</p>
            <p>Getting started</p>
            <p>Pricing</p>
           </div>

        </div>


        <div>
  {faqs.map((faq, index) => (
    <div key={index}>
      <button
        className="text-left px-4 py-3 font-medium text-gray-800 flex justify-between items-center focus:outline-none w-full"
        onClick={() => toggleFAQ(index)}
      >
        <span>{faq.question}</span>
        {openIndex === index ? (
  <img src="/faq-close.svg" alt="faq-open" />
) : (
  <img src="/faq-open.svg" alt="faq-close" />
)}
      </button>



      {openIndex === index && (
        <div>
          <div className="px-4 py-3 text-gray-700 text-gray-600">{faq.answer}</div>
        </div>
      )}

  <hr className="border-t-2 border-gray-300 my-4" />
    </div>

  ))}
</div>

        </div>
  )
}

export default Faq








