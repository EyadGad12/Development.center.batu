import React from "react";
import { NavLink } from "react-router";

function CenterProfile() {
  return (
  <>
    <div className="min-h-screen w-full bg-[rgba(27,89,105,0.801)] font-[system-ui] text-white overflow-x-hidden" dir="rtl">
      <div className="p-4 md:p-6 flex justify-start absolute top-0 left-0">
        <NavLink to="/" className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold backdrop-blur-sm transition-all duration-300 flex items-center gap-2">
          Back to Home &larr; 
        </NavLink>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="mt-14 w-32 h-32 md:w-44 md:h-44 mb-6 p-2 flex items-center justify-center overflow-hidden">
             <img src="/images/img1.png" alt="شعار المركز" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight text-white">مركز التطوير والأنظمة المتكاملة</h1>
          <h2 className="text-xl md:text-2xl text-blue-100 font-semibold drop-shadow-md">جامعة برج العرب التكنولوجية</h2>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          
          <p className="text-lg md:text-2xl leading-relaxed mb-12 text-white/95 font-medium text-center md:text-right">
            في إطار دعم الابتكار وتشجيع المشاريع الطلابية داخل جامعة برج العرب التكنولوجية، تم إطلاق <span className="text-blue-200 font-bold px-1">مركز التطوير والأنظمة المتكاملة</span> ليكون منصة داعمة للطلاب والفرق الطلابية في تطوير مشاريعهم وتحسين جودتها التقنية والهندسية.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
            <div className="bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 h-full shadow-inner flex flex-col justify-center transition-all duration-300 hover:bg-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-300 rounded-full"></span>
                يهدف المركز إلى:
              </h3>
              <ul className="space-y-5 text-lg md:text-xl text-white/90 list-none">
                <li className="flex items-start gap-4">
                  <span className="text-blue-300 text-2xl leading-none mt-1">&bull;</span>
                  <span>تقديم الدعم الفني والتقني للمشاريع الطلابية.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-300 text-2xl leading-none mt-1">&bull;</span>
                  <span>المساعدة في حل المشكلات التقنية التي تواجه الفرق والمشروعات.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-300 text-2xl leading-none mt-1">&bull;</span>
                  <span>تطوير وتحسين الشكل النهائي للمشاريع بما يعكس المستوى المتميز لطلاب الجامعة.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-300 text-2xl leading-none mt-1">&bull;</span>
                  <span>المساهمة في إخراج مشاريع طلابية مبتكرة تليق باسم الجامعة.</span>
                </li>
              </ul>
            </div>
            
            {/* Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl h-full min-h-[300px] flex items-center justify-center bg-white/5 border border-white/10">
              <img src="/images/img2.jpeg" alt="جامعة برج العرب التكنولوجية" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          </div>

          <div className="bg-gradient-to-l from-white/10 to-transparent border-r-4 border-blue-300 rounded-xl p-6 md:p-8 mb-10 transition-all duration-300 hover:border-blue-200">
            <p className="text-lg md:text-xl leading-relaxed text-white/95">
              وقد جاء إنشاء المركز بتوجيه من <span className="font-bold text-blue-200">د. أسامة النحاس</span> رئيس قسم تكنولوجيا المعلومات، وتحت رعاية <span className="font-bold text-blue-200">د. محمد مرسي الجوهري</span> رئيس الجامعة، دعمًا لمسيرة الابتكار والتطوير داخل الجامعة.
            </p>
          </div>

          <div className="bg-[rgba(27,89,105,0.6)] border border-white/20 rounded-2xl p-6 text-center transform hover:scale-[1.02] transition-transform duration-300 shadow-lg mt-8">
            <p className="text-xl md:text-2xl font-bold text-white mb-2 flex justify-center items-center gap-2">
              <span className="text-2xl">📌</span> تابعوا الصفحة لمعرفة المزيد عن خدمات المركز
            </p>
            <p className="text-lg text-white/80">
              وأهم المبادرات والأنشطة القادمة.
            </p>
          </div>

        </div>
      </div>
    </div>
  </>
  );
}

export default CenterProfile;
