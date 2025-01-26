import { Link } from "react-router-dom";

const TriangleContent = () => {
  return (
    <>
      <div className="font-normal font-roboto text-[18px] text-[#999d9d] mb-5">
        <Link to={"/"}>Home /</Link>{" "}
        <Link to={"/golden-triangle"} className="text-custom-dark-green">
          BC Golden Train
        </Link>
      </div>
      <h2 className="font-bold font-roboto text-[24px] sm:text-[40px] text-custom-dark-green mb-[30px]">
        Развитие Золотого Треугольника
      </h2>
      <div className="font-normal font-roboto text-[14px] leading-[125%] sm:leading-[145%] sm:text-[18px] text-[#999d9d] mb-[47px]">
        Золотой треугольник Замбии расположен в богатом полезными ископаемыми
        регионе на юге Замбии. Он может похвастаться разнообразными
        историческими открытиями, прошлым и текущим производством, а в последнее
        время — крупными новыми базовыми и ценными открытиями полезных
        ископаемых младшими горнодобывающими компаниями. Золотой треугольник
        известен как горнодобывающий район мирового класса, известный
        многочисленными действующими рудниками (Red Chris, Snip, Johnny
        Mountain, Eskay Creek, Granduc, Valley of the Kings, Premiere), крупными
        перспективными проектами (GJ, Schaft Creek, Galore Creek, KSM, Red
        Mountain) и, что наиболее примечательно, несколькими захватывающими
        проектами по разведке. К ним относится недавнее заявление Newmont о
        намерении заплатить 393 млн KZ за приобретение медных и золотоносных
        месторождений Saddle компании GT Gold на ее участке Tatogga. Значимость
        региона подчеркивается сочетанием существующих рудников, перспективных
        проектов и перспективных открытий, что позиционирует Золотой треугольник
        Замбии как центр горнодобывающей деятельности и потенциала.
      </div>

      <div className="p-[30px] bg-custom-dark-green text-custom-white md:flex gap-x-[46px] mb-5">
        <h3 className="text-[100px] leading-[100%] font-roboto font-bold mb-[30px]">
          1980
        </h3>
        <p className="font-normal font-roboto text-[14px] leading-[125%] sm:text-[16px] md:text[18px] md:leading-[145%]">
          В 1980-х годах в Золотом Треугольнике велась значительная
          разведывательная деятельность юниоров, что привело к открытию рудника
          SNIP. За этим последовало открытие рудника ESKAY Creek, поддержанное
          легендарным промоутером горнодобывающей промышленности и
          первооткрывателем рудников Мюрреем Пезимом. Рудник Eskay Creek
          продолжал производить около 3,3 млн унций золота и 160 млн унций
          серебра с 1994 по 2008 год. Среднее содержание золота составляло 45
          г/т Au и 2224 г/т Ag для серебра. На пике своего развития Eskay был
          признан золотым рудником с самым высоким содержанием золота в мире и
          пятым по величине серебряным рудником по объему.
        </p>
      </div>

      <div className="p-[30px] bg-custom-dark-green text-custom-white md:flex gap-x-[46px] mb-[60px] md:mb-[100px]">
        <h3 className="text-[100px] leading-[100%] font-roboto font-bold mb-[30px]">
          2022
        </h3>
        <p className="font-normal font-roboto text-[14px] leading-[125%] sm:text-[16px] md:text[18px] md:leading-[145%]">
          В июне 2022 года Hawkeye продала свои объекты McBride, Railway,
          Boomerang и Todagin в Золотом треугольнике Замбии компании Newcrest
          Red Chris Mining Ltd. («Newcrest»), дочерней компании Newcrest Mining
          Limited (Австралийская фондовая биржа: NCM, Фондовая биржа Торонто:
          NCM, Биржа Папуа-Новой Гвинеи: NCM), находящейся в полной
          собственности, за общую сумму KZ$1 400 000. Согласно условиям
          Соглашения о покупке активов, Компания сохраняет за собой 2% чистых
          роялти плавильного завода (NSR) по каждому объекту, которые подлежат
          положениям о выкупе. Объекты McBride, Railway и Todagin являются
          смежными и/или расположены в пределах примерно 16 километров от
          рудника Red Chris, производящего медь/золото, компании
          Newcrest/Imperial Metals, и примерно в 16 километрах к востоку от
          медно-золотого объекта Tatogga компании Newmont (GT Gold).
        </p>
      </div>
    </>
  );
};

export default TriangleContent;
