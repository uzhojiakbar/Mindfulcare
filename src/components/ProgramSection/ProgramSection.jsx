import styled, { css } from "styled-components";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";

const Section = styled.section`
  width: 100%;
  padding: 48px 0 48px 0;
  background: #fff;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 24px 0 24px 0;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 40px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
    padding: 0 4px;
  }
`;

const Left = styled.div`
  flex: 1.2;
  min-width: 40%;
  max-width: 40%;
  @media (max-width: 900px) {
    max-width: 100%;
    min-width: 0;
    padding: 20px 8px 12px 8px;
    margin-bottom: 0;
  }
`;

const MiniTitle = styled.div`
  color: rgba(105, 65, 198, 1);
  font-weight: 600;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
  line-height: 1.2;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 18px;
  font-family: "Manrope", sans-serif;
  color: rgba(16, 24, 40, 1);
  @media (max-width: 900px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  margin-bottom: 18px;
  line-height: 1.6;
  font-family: "Manrope", sans-serif;
  ul {
    padding-left: 20px;
    li {
      font-family: "Manrope", sans-serif;
    }
  }
  @media (max-width: 900px) {
    font-size: 13px;
    margin-bottom: 14px;
  }
`;

const PDFButton = styled.a`
  position: relative;
  overflow: hidden;
  border: none;
  padding: 15px 30px;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  background: var(--button-background);
  z-index: 0;
  font-weight: 700;
  font-family: "Manrope";
  font-size: 18px;
  color: white;
  max-width: 360px;
  user-select: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--button-background-hover);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  &:hover::before {
    opacity: 1;
  }
  @media (max-width: 900px) {
    width: 100%;
    font-size: 15px;
    margin: 0 auto;
    padding: 12px 0;
    display: block;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (max-width: 900px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  border: 1px solid rgba(207, 216, 225, 1);
  border-radius: 18px;
  padding: 24px;
  flex: 1;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 12px 0 rgba(83, 156, 208, 0.06);

  position: relative;

  @media (max-width: 900px) {
    min-width: 0;
    padding: 14px 8px 10px 8px;
    gap: 8px;
    padding-bottom: 50px;
  }
`;

const CardTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .next {
    width: 35%;
    font-size: 16px;
    color: rgba(102, 112, 133, 1);
    margin-bottom: 18px;
    line-height: 1.6;
    font-family: "Manrope", sans-serif;
    text-align: justify;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 4px;

    .next {
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: 13px;
      margin-bottom: 0;
      text-align: left;
      display: flex;
    }
  }
`;

const CardTitle = styled.div`
  color: ${({ $color }) => ($color ? $color : "white")};
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  margin-bottom: 6px;
  background: ${({ color }) =>
    color || "linear-gradient(88.95deg, #539CD0 25.53%, #75C1E5 73.97%)"};
  width: fit-content;
  max-height: 40px;
  padding: 8px 18px;
  border-radius: 9px;
  font-size: 16px;
  font-family: "Manrope";
  @media (max-width: 900px) {
    font-size: 14px;
    padding: 6px 18px;
    max-height: 50px;
    margin: 0 auto;
    margin-bottom: 18px;
  }
`;

const CardList = styled.div`
  display: flex;
  gap: 40px;
  font-size: 15px;
  color: rgba(102, 112, 133, 1);
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  li {
    margin-bottom: 6px;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }
  .img {
    min-width: 40px;
    @media (max-width: 900px) {
      min-width: 28px;
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
  @media (max-width: 900px) {
    gap: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
  }
`;

const EmojicContainer = styled.span`
  font-size: 24px;
  margin-right: 8px;
  img {
    width: 22px;
    height: 22px;
    @media (max-width: 900px) {
      width: 18px;
      height: 18px;
    }
  }
  @media (max-width: 900px) {
    font-size: 18px;
    margin-right: 6px;
  }
`;

export default function ProgramSection() {
  return (
    <Section id="program" data-aos="fade-down" className="page-container">
      <Container>
        <Left>
          <MiniTitle>720 часов / 6 месяцев</MiniTitle>
          <Title>Программа обучения</Title>
          <Desc>
            Получите полную подготовку по остеопатии за 6 месяцев интенсивной
            учёбы. Обучение включает 720 часов теории и практики, с
            сертификатами государственного образца.{" "}
            <span style={{ color: "#539cd0", fontWeight: 600 }}>
              Стоимость полного курса — 2500$ (в суммах по курсу на момент
              оплаты). Возможна рассрочка.
            </span>
            <br />
            <br />
            Документы по окончанию:
            <br />
            <ul>
              <li> Сертификат о дополнительной специализации (для врачей)</li>
              <li>
                {" "}
                Удостоверение о получении навыков (для специалистов с СЗ
                Академии остеопатии и медицинских психологов)
              </li>
            </ul>
          </Desc>
          <PDFButton href="#" target="_blank">
            Расписание / Скачать PDF
          </PDFButton>
        </Left>
        <Right>
          <Card color="#eaf6fb">
            <CardTitleContainer>
              <CardTitle color="linear-gradient(88.95deg, #539CD0 25.53%, #75C1E5 73.97%)">
                Теоретическая часть (180 ч)
              </CardTitle>
              <div className="next">
                <EmojicContainer>
                  <img
                    src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f9e0.png"
                    alt="🧠"
                    width={24}
                    height={24}
                    style={{ verticalAlign: "middle" }}
                  />
                </EmojicContainer>
                Занятия в аудитории и онлайн. Теория, анатомия, биомеханика,
                философия остеопатии.
              </div>
            </CardTitleContainer>

            <CardList>
              <div className="img">
                <img src="/cards_icon1.svg" alt="cards_icon1.svg" />
              </div>
              <ul>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4c5.png"
                      alt="📅"
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  1 раз в неделю
                </li>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4cd.png"
                      alt="📍"
                      width={24}
                      height={24}
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  СЗ Академия остеопатии (Россия)
                </li>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4da.png"
                      alt="📚"
                      width={24}
                      height={24}
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  Ведущие преподаватели + материалы
                </li>
              </ul>
            </CardList>
          </Card>
          <Card color="#eaf6fb">
            <CardTitleContainer>
              <CardTitle
                $color="rgba(148, 122, 229, 1)"
                color="linear-gradient(87.64deg, #DED5F1 -7.84%, #DDCFFF 35.45%)"
              >
                Интенсивы с преподавателями (180 ч){" "}
              </CardTitle>
              <div className="next">
                <EmojicContainer>
                  <img
                    src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f680.png"
                    alt="🚀"
                    width={24}
                    height={24}
                    style={{ verticalAlign: "middle" }}
                  />
                </EmojicContainer>
                3-дневные семинары каждый месяц{" "}
              </div>
            </CardTitleContainer>

            <CardList>
              <div className="img">
                <img src="/cards_icon2.svg" alt="cards_icon1.svg" />
              </div>
              <ul>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f558.png"
                      alt="🕘"
                      width={24}
                      height={24}
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  С 9:00 до 17:00{" "}
                </li>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4cd.png"
                      alt="📍"
                      width={24}
                      height={24}
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  Ташкент{" "}
                </li>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f468-200d-2695-fe0f.png"
                      alt="👨‍⚕️"
                      width={24}
                      height={24}
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  Преподаватели из СЗ Академии + кураторы{" "}
                </li>
              </ul>
            </CardList>
          </Card>

          <Card color="#eaf6fb">
            <CardTitleContainer>
              <CardTitle color="linear-gradient(87.64deg, #61C69C -7.84%, #43A78F 35.45%)">
                Интенсивы с преподавателями (180 ч){" "}
              </CardTitle>
              <div className="next">
                <EmojicContainer>
                  <img
                    src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f680.png"
                    alt="🚀"
                    width={24}
                    height={24}
                    style={{ verticalAlign: "middle" }}
                  />
                </EmojicContainer>
                3-дневные семинары каждый месяц{" "}
              </div>
            </CardTitleContainer>

            <CardList>
              <div className="img">
                <img src="/cards_icon3.svg" alt="cards_icon1.svg" />
              </div>
              <ul>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f3e5.png"
                      alt="🏥"
                      width={24}
                      height={24}
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  3 раза в неделю{" "}
                </li>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f9d1-200d-2695-fe0f.png"
                      alt="🧑‍⚕️"
                      width={24}
                      height={24}
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  Пациенты, реальная отработка навыков{" "}
                </li>
                <li>
                  <EmojicContainer>
                    <img
                      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4cd.png"
                      alt="📍"
                      width={24}
                      height={24}
                      style={{ verticalAlign: "middle" }}
                    />
                  </EmojicContainer>
                  Клиника Biolife (Узбекистан){" "}
                </li>
              </ul>
            </CardList>
          </Card>
        </Right>
      </Container>
    </Section>
  );
}
