"use client";

import Image from "next/image";
import secondImage from "../../public/detect.jpg";

const Detect = () => {
  return (
    <div dir="rtl">
      <div className="text-2xl text-center pt-8 border-t uppercase">
        <div className="inline-flex gap-2 items-center mb-3 justify-center">
          <p className="text-gray-700 font-bold">الكشف عن طريق القمر الصناعي</p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <Image
          className="w-full md:max-w-[450px]"
          src={secondImage}
          alt="الكشف عبر القمر الصناعي"
          width={450}
          height={300} // adjust according to image
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            شركه treasure hunters هي شركه عالميه تم تأسيسها في عام 2017 في
            الولايات المتحدة الأمريكية وهي شركه متخصصه في تكنولوجيا التنقيب حيث
            تقوم بصناعة اجهزه متقدمة متخصصه في الكشف والتنقيب عن ثروات باطن
            الأرض ولديها العديد من براءات الاختراع.
          </p>

          <b className="text-gray-800">رؤيتنا</b>
          <p>
            أن نكون الشركة الرائدة عالميًا في تكنولوجيا الاستكشاف، ونشكل مستقبل
            التنقيب عن الكنوز والثروات الباطنية من خلال الابتكار المستمر،
            والاستدامة، والاعتماد على تقنيات موثوقة ومتطورة.
          </p>

          <b className="text-gray-800">رسالتنا</b>
          <p>
            تقديم حلول تقنية متقدمة تحدث ثورة في مجال التنقيب تحت الأرض، وتمكّن
            المستكشفين والباحثين والمهنيين حول العالم من اكتشاف الكنوز بدقة
            وأمان وابتكار.
          </p>
        </div>
      </div>

      <div className="text-2xl py-4 uppercase">
        <div className="inline-flex gap-2 items-center mb-8 justify-center">
          <p className="text-gray-700 font-bold">لماذا</p>
          <p className="text-gray-700 font-bold">تختارنا؟</p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>ضمان الجودة</b>
          <p className="text-gray-600">
            نلتزم بأعلى معايير الجودة في تصميم وتصنيع أجهزتنا، باستخدام أحدث
            التقنيات لضمان الأداء الفعّال والدقة العالية في كل عملية تنقيب.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>الراحة والسهولة</b>
          <p className="text-gray-600">
            تم تصميم أجهزتنا لتكون سهلة الاستخدام، خفيفة الوزن، ومناسبة لمختلف
            البيئات، ما يجعل تجربة التنقيب أكثر راحة وفعالية سواء للمبتدئين أو
            المحترفين.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>خدمة عملاء متميزة</b>
          <p className="text-gray-600">
            نضع رضا العملاء في صميم اهتمامنا، ونوفر دعمًا فنيًا واستشارات على
            مدار الساعة لمساعدتك في كل خطوة من رحلتك في عالم التنقيب.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detect;
