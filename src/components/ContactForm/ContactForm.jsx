import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

const FormSection = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 0 64px 0;
  @media (max-width: 1100px) {
    padding: 32px 0 32px 0;
  }
`;

const FormGrid = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  gap: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const ImageBlock = styled.div`
  flex: 1 1 50%;
  min-width: 0;
  min-height: 420px;
  background: url("/Contact.png") center center/cover no-repeat;
  border-radius: 24px;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

// const StyledImg = styled.img`
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;
//   border-radius: 24px;
//   z-index: 1;
//   opacity: 0.92;
//   @media (max-width: 900px) {
//     border-radius: 18px;
//     opacity: 0.95;
//   }
// `;

const FormWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 0 24px 24px 0;
  padding: 50px 70px;

  min-height: 420px;
  @media (max-width: 900px) {
    border-radius: 18px;
    min-height: unset;
    padding: 0;
    background: transparent;
  }
`;

const InnerCard = styled.div`
  border-radius: 18px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 28px 12px 24px 12px;
    max-width: 98vw;
    margin: 0 auto;
    border-radius: 18px;
    box-shadow: 0 2px 12px 0 rgba(83, 156, 208, 0.08);
  }
`;

const Title = styled.h2`
  font-size: 38px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-align: left;
  margin-bottom: 28px;
  @media (max-width: 600px) {
    font-size: 22px;
    margin-bottom: 22px;
  }
`;

const Label = styled.label`
  font-size: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin-bottom: 6px;
  color: #344054;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1.5px solid #d0d5dd;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  background-color: #fff;
  color: #344054;

  margin-bottom: 18px;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border: 1.5px solid #539cd0;
  }
`;

const Button = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  background: var(--button-background);
  z-index: 0;
  width: 100%;

  font-weight: 700;
  font-family: "Manrope";
  font-size: 18px;
  color: white;

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

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ToastAnimDesktop = keyframes`
  0% { opacity: 0; transform: translateY(30px);}
  20% { opacity: 1; transform: translateY(0);}
  80% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-30px);}
`;

const ToastAnimMobile = keyframes`
  0% { opacity: 0; transform: translateY(60px);}
  20% { opacity: 1; transform: translateY(0);}
  80% { opacity: 1; }
  100% { opacity: 0; transform: translateY(60px);}
`;

const Toast = styled.div`
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  min-width: 220px;
  max-width: 96vw;
  background: #fff;
  color: #222;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 14px;
  box-shadow: 0 4px 24px 0 rgba(83, 156, 208, 0.13);
  padding: 18px 32px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1.5px solid #e3e8ef;
  animation: ${ToastAnimDesktop} 2.2s cubic-bezier(0.4, 0, 0.2, 1);

  .toast-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f5f6fa;
    margin-right: 8px;
    svg {
      font-size: 16px;
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    left: 0;
    right: 0;
    top: 0;
    bottom: unset;
    transform: none;
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
    border-radius: 0 0 12px 12px;
    padding: 14px 18px;
    font-size: 15px;
    gap: 10px;
    box-shadow: 0 2px 12px 0 rgba(83, 156, 208, 0.1);
    border: 1px solid #e3e8ef;
    animation: ${ToastAnimMobile} 2.2s cubic-bezier(0.4, 0, 0.2, 1);
    justify-content: center;
  }
`;

function formatPhone(phone) {
  // Only allow digits, + at start, and dashes
  let digits = phone.replace(/[^\d+\-]/g, "");
  // If user tries to remove dashes or +, allow it
  // If user types + at start, keep it
  if (digits.startsWith("+")) {
    digits = "+" + digits.slice(1).replace(/[+]/g, "");
  }
  // Remove all but first +
  // Remove all non-digits for formatting
  const raw = digits.replace(/[^\d]/g, "");
  // Format as before
  if (raw.startsWith("998")) {
    // Uzbekistan: +998 99 999 99 99
    return (
      (digits.startsWith("+") ? "+" : "") +
      "998" +
      (raw.slice(3, 5) ? " " + raw.slice(3, 5) : "") +
      (raw.slice(5, 8) ? " " + raw.slice(5, 8) : "") +
      (raw.slice(8, 10) ? " " + raw.slice(8, 10) : "") +
      (raw.slice(10, 12) ? " " + raw.slice(10, 12) : "")
    ).trim();
  }
  if (raw.startsWith("7")) {
    // Russia: +7 (999) 999-99-99
    return (
      (digits.startsWith("+") ? "+" : "") +
      "7" +
      (raw.slice(1, 4) ? " (" + raw.slice(1, 4) + ")" : "") +
      (raw.slice(4, 7) ? " " + raw.slice(4, 7) : "") +
      (raw.slice(7, 9) ? "-" + raw.slice(7, 9) : "") +
      (raw.slice(9, 11) ? "-" + raw.slice(9, 11) : "")
    ).trim();
  }
  if (raw.startsWith("1")) {
    // USA: +1 (999) 999-9999
    return (
      (digits.startsWith("+") ? "+" : "") +
      "1" +
      (raw.slice(1, 4) ? " (" + raw.slice(1, 4) + ")" : "") +
      (raw.slice(4, 7) ? " " + raw.slice(4, 7) : "") +
      (raw.slice(7, 11) ? "-" + raw.slice(7, 11) : "")
    ).trim();
  }
  if (raw.startsWith("82")) {
    // Korea: +82 10-9999-9999
    return (
      (digits.startsWith("+") ? "+" : "") +
      "82" +
      (raw.slice(2, 4) ? " " + raw.slice(2, 4) : "") +
      (raw.slice(4, 8) ? "-" + raw.slice(4, 8) : "") +
      (raw.slice(8, 12) ? "-" + raw.slice(8, 12) : "")
    ).trim();
  }
  // Default: just show as is
  return digits;
}

export default function ContactForm() {
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const toastTimeout = React.useRef();

  const showToast = (toastObj) => {
    setToast(toastObj);
    clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(null), 2200);
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone.replace(/[^\d]/g, "")) {
      showToast({ type: "error", msg: "Пожалуйста, введите номер телефона" });
      return;
    }
    if (!/^@([a-zA-Z0-9_]{5,32})$/.test(telegram)) {
      showToast({ type: "error", msg: "Некорректный Telegram username" });
      return;
    }
    if (!fio.trim()) {
      showToast({ type: "error", msg: "Пожалуйста, введите ФИО" });
      return;
    }

    const data = { fio, phone, telegram };

    showToast({ type: "loading", msg: "Отправка..." });
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1200));
      showToast({ type: "success", msg: "Успешно отправлено!" });
      setFio("");
      setPhone("");
      setTelegram("");
    } catch (e) {
      showToast({
        type: "error",
        msg: "Произошла ошибка. Попробуйте еще раз.",
      });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    return () => clearTimeout(toastTimeout.current);
  }, []);

  return (
    <FormSection>
      <FormGrid>
        <ImageBlock />
        <FormWrapper>
          <InnerCard>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Title>Связаться с нами</Title>
              <Label htmlFor="fio">ФИО</Label>
              <Input
                id="fio"
                placeholder="Your name"
                value={fio}
                onChange={(e) => setFio(e.target.value)}
                disabled={loading}
                autoComplete="off"
              />
              <Label htmlFor="phone">Номер телефона</Label>
              <Input
                id="phone"
                placeholder="+998 90 123 45 67"
                value={phone}
                onChange={handlePhoneChange}
                disabled={loading}
                autoComplete="off"
                inputMode="tel"
              />
              <Label htmlFor="telegram">Ваш никнейм в Telegram</Label>
              <Input
                id="telegram"
                placeholder="@username"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                disabled={loading}
                autoComplete="off"
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Отправка..." : "Отправить"}
              </Button>
            </form>
          </InnerCard>
        </FormWrapper>
      </FormGrid>
      {toast && (
        <Toast type={toast.type}>
          <span className="toast-icon">
            {toast.type === "loading" && (
              <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="9"
                  stroke="#fff"
                  strokeWidth="3"
                  opacity="0.3"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="9"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeDasharray="56"
                  strokeDashoffset="36"
                />
              </svg>
            )}
            {toast.type === "success" && (
              <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" fill="#fff" />
                <path
                  d="M7 11.5L10 14.5L15 9.5"
                  stroke="#61b6e6"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {toast.type === "error" && (
              <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" fill="#fff" />
                <path
                  d="M8 8L14 14M14 8L8 14"
                  stroke="#e05a5a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
          <span>{toast.msg}</span>
        </Toast>
      )}
    </FormSection>
  );
}
