import ContactForm from "@/components/public/ContactForm";

export default function Page(){
    return(
        <div className="w-full my-20 md:my-36 md:items-center flex flex-col min-h-screen">
            <div className="text-white font-bold text-center py-8">
                <h1 className="flex flex-col text-2xl/[1.5rem] md:text-[3.375rem]/[4rem]"><span>Get in <span className="text-blue-700">Touch</span></span></h1>
                <h4 className="text-[10px] md:text-[1rem] flex flex-col md:flex-row md:justify-center md:gap-1"><span>Our customer support team is at your disposal 24/7/365.</span><span>We&apos;re happy to answer all of your questions.</span></h4>
            </div>

            <ContactForm />
        </div>
    )
}