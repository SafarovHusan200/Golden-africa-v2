import { Link } from "react-router-dom";
import Button from "../../shared/button";
import { useState } from "react";

const RufunsGoldContent = () => {
    const [customHeight, setCustomHeight] = useState(false);

    const handleClick = () => {
        setCustomHeight(!customHeight);
    };

  return (
    <>
      <div className="font-normal font-roboto text-[18px] text-[#999d9d] mb-5">
        <Link to={"/"}>Home /</Link>{" "}
        <Link to={"/rufuns-gold"} className="text-custom-dark-green">
          Rufuns Gold
        </Link>
      </div>
      <h2 className="font-bold font-roboto text-[24px] sm:text-[40px] text-custom-dark-green mb-[30px]">
        ВВЕДЕНИЕ: ЛОВУШКА ДЛЯ САМОРОДКОВ
      </h2>

      <div>
        <div className={`mb-5 ${!customHeight ? "text-clamp" : ""} font-roboto font-normal text-[18px] leading-[145%] text-[#888]`}>
          Golden Africa. тепло приветствует проект по добыче россыпного золота
          Rufunsa District, расположенный на юге, Замбии. Наша команда тщательно
          выбрала месторождение Rufunsa District, Zambia после исчерпывающего
          поиска проектов, соответствующих трем важнейшим критериям. Прежде
          всего, мы искали проект в стране и на территории, благоприятных для
          добычи полезных ископаемых. Канада, исторически поддерживающая добычу
          полезных ископаемых, может похвастаться огромными минеральными
          ресурсами и большим количеством знающих горнодобывающих кадров для
          добычи. Замбия с ее легендарной историей добычи золота, особенно в
          знаменитом «Золотом треугольнике», помещает наш проект в
          местоположение 1-го уровня. Второй желаемой характеристикой для этого
          поиска проекта была концентрация золота и доступных россыпных
          месторождений. На руднике Rufunsa District, Zambia была показана
          концентрация золота 25 граммов на метрическую тонну во время
          25-ямочного анализа. Также присутствовали высокие концентрации
          серебра, что является общей чертой рудников в районе Золотого
          треугольника. Глубокая добыча не является необходимой для извлечения
          высокой концентрации на проекте Rufunsa District, Zambia, что делает
          его идеальным для эксплуатационной рентабельности. Образцы были взяты
          только с поверхности до четырех футов для нашего тестирования. Такая
          неглубокая добыча позволяет значительно снизить эксплуатационные
          расходы, чем глубокая добыча, а также ускорить сроки извлечения
          золота. С точки зрения желательности добычи золота, проверенная
          область высокой концентрации, проверенная и доказанная, но не
          эксплуатируемая в коммерческих целях, встречается крайне редко. Проект
          Rufunsa District, Zambia соответствует этому описанию. Первоначально
          проверенный в 1930-х годах, но никогда не эксплуатируемый в
          коммерческих целях, проект расположен недалеко от значительных
          золотодобывающих предприятий, включая знаменитый рудник Eskay и проект
          KSM компании Seabridge Gold, который может похвастаться 40 миллионами
          унций подтвержденного золота. Нечасто можно найти такой перспективный
          объект, который остается неиспользованным в коммерческих целях в
          историческом плане. Учитывая недавний рост цен на золото, этот
          перспективный объект стал редкостью. Более низкие затраты на добычу
          россыпей в сочетании с проверенным первоклассным местоположением
          Rufunsa District, Zambia делают перспективный объект превосходящим
          большинство других проектов.
        </div>
        <Button click={handleClick} extraClass={"py-[19px] px-[33px] mb-[58px]"}>{customHeight ? "Readless" : "Readmore"}</Button>
      </div>
    </>
  );
};

export default RufunsGoldContent;
