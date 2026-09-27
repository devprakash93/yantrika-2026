import { faqs } from '../data';

export default function FAQ() {
  return (
    <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {faqs.map(faq => (
          <div key={faq.id} className="border p-6 rounded-lg bg-card text-card-foreground">
            <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
