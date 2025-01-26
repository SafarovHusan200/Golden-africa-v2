import { Link, useParams } from "react-router-dom";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

const SingleNews = () => {
  const { id } = useParams();
  return (
    <>
      <Banner
        title={
          "GEM Digital Limited увеличивает инвестиционные обязательства с Golden Africa со 153 млн долларов США до 336 млн долларов США"
        }
        extraClass={true}
        subTitle="12 декабря 2024"
      />

      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>

        <div className="container">
          <div className="font-normal font-roboto text-[18px] text-[#999d9d] mb-5 truncate">
            <Link to={"/"}>Home /</Link>{" "}
            <Link to={"/rufuns-gold"}>Nugget Trap /</Link>{" "}
            <Link to={`/news/${id}`} className="w-max text-custom-dark-green">
              GEM Digital Limited увеличивает инвестиционные обязательства с
              Cunningham Mining Ltd со 153 млн долларов США до 336 млн долларов
              США
            </Link>
          </div>

          <div className="mb-[40px] md:mb-[60px] xl:mb-[80px] lg:mb-[100px]">
            <Link
              to={"/news"}
              className="w-max flex items-center font-normal font-roboto text-[18px] text-custom-gold mb-5 hover:text-custom-dark-green group"
            >
              <span className="w-max flex items-center justify-center py-[3px] px-[9px] bg-custom-gold group-hover:bg-custom-dark-green text-custom-white rounded-[5px] mr-[5px]">
                <svg
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.54801 17.4198L8.48701 18.4798L2.70801 12.7028C2.61486 12.6102 2.54093 12.5001 2.49048 12.3789C2.44003 12.2576 2.41406 12.1276 2.41406 11.9963C2.41406 11.8649 2.44003 11.7349 2.49048 11.6137C2.54093 11.4924 2.61486 11.3823 2.70801 11.2898L8.48701 5.50977L9.54701 6.56977L4.12301 11.9948L9.54801 17.4198Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              Назад
            </Link>

            <div className="flex flex-col gap-y-5 mb-5 md:mb-10 font-normal font-roboto text-[14px] sm:text-[16px] md:text-[18px] text-[#888]">
              <p>
                <span className="text-custom-dark-green">
                  Golden Africa, 4 сентября 2024 г.
                </span>{" "}
                — Golden Africa с радостью сообщает, что первоначально
                реализованная подписка на токены с GEM Digital Limited («GEM
                Digital») на сумму 153 млн долларов США была увеличена до 336
                млн долларов США, что подтверждает большую уверенность рынков в
                первоначальной финансовой линии, которая будет использована для
                предполагаемого приобретения American Creek Resources Ltd (TSXV:
                AMK). Cunningham Mining Ltd планирует использовать увеличенную
                линию для дальнейших приобретений золотых активов в ближайшем
                будущем.
              </p>
              <p>
                В рамках соглашения GEM Digital предоставит Golden Africa
                подписку на токены на сумму до $336 млн сроком на 36 месяцев
                после листинга токена Golden Africa на централизованной бирже.
                Golden Africa будет контролировать сроки и максимальный объем
                изъятий в рамках этого фонда и не имеет минимальных обязательств
                по изъятию.
              </p>
              <p>
                «Мы рады укреплению нашего партнерства с GEM Digital для этой
                важной возможности подписки на токены, которая позволит компании
                приобрести American Creek Resources Ltd и еще больше расширить
                наше присутствие в секторе разведки золота. Полные двадцать
                процентов отчислений American Creek Resources в месторождении
                Treaty Creek Gold будут добавлены и монетизированы на балансе
                нашего ожидаемого токена NGTGOLD на основе RWA, содержащего
                более 6 миллионов унций подземных золотых ресурсов и
                потенциально больше», — сказал Райан Каннингем, генеральный
                директор Cunningham Mining Ltd. «Это приобретение соответствует
                нашим стратегическим планам роста и позволит нам извлечь выгоду
                из многообещающих возможностей на рынке золота.
              </p>
              <p>
                «Мы уверены, что эта финансовая сделка с GEM Digital поддержит
                наше приобретение American Creek Resources Ltd и обеспечит
                долгосрочную ценность для наших акционеров», — добавил
                Каннингем. «Мы с нетерпением ждем возможности использовать опыт
                и ресурсы обеих компаний, чтобы максимально использовать
                потенциал этого приобретения и обеспечить положительные
                результаты для всех заинтересованных сторон. Наш токен NGTGOLD
                будет объявлен о своем официальном листинге на бирже в ближайшие
                дни». Закрытие сделки по финансированию зависит от обычных
                условий закрытия и одобрения регулирующих органов.
                Дополнительные подробности относительно приобретения American
                Creek Resources будут объявлены в надлежащее время.
              </p>
            </div>

            <div className="font-normal font-roboto text-[14px] sm:text-[16px] md:text-[18px] text-[#888] mb-5 md:mb-10">
              <h2 className="font-bold text-[24px] sm:text-[30px] md:text-[40px] text-custom-dark-green mb-5">
                О компании GEM Digital Limited
              </h2>
              <p className="mb-5">
                <span className="text-custom-dark-green">
                  GEM Digital Limited
                </span>{" "}
                — это фирма по инвестициям в цифровые активы. Расположенная на
                Багамах, фирма активно занимается поиском, структурированием и
                инвестированием в токены утилит, котирующиеся на более чем 30
                CEX и DEX по всему миру.
              </p>
              <p>
                Global Emerging Markets («GEM») — альтернативная инвестиционная
                группа стоимостью 3,4 млрд долларов с офисами в Париже,
                Нью-Йорке и на Багамах. GEM управляет разнообразным набором
                инвестиционных инструментов, ориентированных на развивающиеся
                рынки, и осуществила более 530 сделок в 72 странах. Каждый
                инвестиционный инструмент имеет разную степень операционного
                контроля, доходность с поправкой на риск и профиль ликвидности.
                Семейство фондов и инвестиционных инструментов предоставляет GEM
                и ее партнерам доступ к выкупам компаний с малой и средней
                капитализацией, частным инвестициям в публичные акции и
                избранным венчурным инвестициям.
              </p>
            </div>

            <div className="font-normal font-roboto text-[14px] sm:text-[16px] md:text-[18px] text-[#888]">
              <h2 className="font-bold text-[24px] sm:text-[30px] md:text-[40px] text-custom-dark-green mb-5">
                О компании Cunningham Mining Ltd.
              </h2>
              <p>
                Компания Golden Africa успешно завершила приобретение
                месторождений, известных как «рудник Nugget Trap Placer Mine» в
                реестре прав собственности на полезные ископаемые Британской
                Колумбии, площадью 573,7 акра, вместе с соответствующими
                разрешениями и полномочиями («Имущество»). Имущество расположено
                в горнодобывающем подразделении Skeena Mining Division в
                Британской Колумбии, Канада, в районе, известном как Золотой
                треугольник Британской Колумбии. Компания намерена оцифровать
                свои текущие и будущие горнодобывающие объекты и месторождения
                посредством выпуска цифровых токенов активов «NGTGOLD» 
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SingleNews;
