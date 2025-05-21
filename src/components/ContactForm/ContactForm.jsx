import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const FormSection = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0 64px 0;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 36px 0 36px 0;
  }
`;

const FormGrid = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  gap: 56px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    max-width: 98vw;
  }
`;

const ImageBlock = styled.div`
  flex: 1.1;
  min-width: 320px;
  max-width: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    max-width: 100vw;
    min-width: 0;
    width: 100%;
    justify-content: center;
    margin-bottom: 0;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 520px;
  min-width: 240px;
  border-radius: 24px;
  object-fit: cover;
  aspect-ratio: 1.6/1;
  box-shadow: 0 4px 24px 0 rgba(83, 156, 208, 0.1);
  @media (max-width: 900px) {
    max-width: 98vw;
    min-width: 0;
    border-radius: 18px;
  }
`;

const FormWrapper = styled.div`
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 28px 12px;
    max-width: 98vw;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  text-align: left;
  margin-bottom: 28px;
`;

const Label = styled.label`
  font-size: 15px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1.5px solid #e3e8ef;
  font-size: 16px;
  font-family: "Manrope", sans-serif;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 18px;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border: 1.5px solid #539cd0;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 13px 0;
  border-radius: 8px;
  background: linear-gradient(88.95deg, #539cd0 25.53%, #75c1e5 73.97%);
  color: #fff;
  font-size: 18px;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.18s;
  &:active {
    background: #539cd0;
  }
`;

const ToastAnim = keyframes`
  0% { opacity: 0; transform: translateY(30px);}
  30% { opacity: 1; transform: translateY(0);}
  80% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-30px);}
`;

const Toast = styled.div`
  position: fixed;
  left: 50%;
  bottom: 48px;
  transform: translateX(-50%);
  background: #fff;
  color: #222;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 rgba(83, 156, 208, 0.13);
  padding: 18px 32px;
  z-index: 9999;
  animation: ${ToastAnim} 2.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  svg {
    font-size: 22px;
  }
`;

function getPhoneType(phone) {
  // Remove spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-()]/g, "");
  if (/^\+998\d{9}$/.test(cleaned) || /^998\d{9}$/.test(cleaned)) return "uz";
  if (/^\+7\d{10}$/.test(cleaned) || /^7\d{10}$/.test(cleaned)) return "ru";
  if (/^\+1\d{10}$/.test(cleaned) || /^1\d{10}$/.test(cleaned)) return "us";
  if (/^\+82\d{9,10}$/.test(cleaned) || /^82\d{9,10}$/.test(cleaned))
    return "kr";
  return "unknown";
}

function isValidTelegram(username) {
  // @username, 5-32 chars, letters, numbers, underscores
  return /^@([a-zA-Z0-9_]{5,32})$/.test(username);
}

export default function ContactForm() {
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone
    const phoneType = getPhoneType(phone);
    if (phoneType === "unknown") {
      setToast({ type: "error", msg: "Telefon raqam formati noto‘g‘ri" });
      return;
    }
    // Validate telegram
    if (!isValidTelegram(telegram)) {
      setToast({ type: "error", msg: "Telegram username noto‘g‘ri" });
      return;
    }
    if (!fio.trim()) {
      setToast({ type: "error", msg: "Ismni kiriting" });
      return;
    }

    // Prepare object
    const data = {
      fio,
      phone,
      phoneType,
      telegram,
    };

    setToast({ type: "loading", msg: "Yuborilmoqda..." });
    setLoading(true);

    // Simulate API call
    try {
      await new Promise((res) => setTimeout(res, 1200));
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      setToast({ type: "success", msg: "Habar yuborildi!" });
      setFio("");
      setPhone("");
      setTelegram("");
    } catch (e) {
      setToast({
        type: "error",
        msg: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 2000);
    }
  };

  return (
    <FormSection>
      <FormGrid>
        <ImageBlock>
          <StyledImg src="/Contact.png" alt="Contact" />
        </ImageBlock>
        <FormWrapper>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Title>
              Связаться с нами (Progresssing. Birinchi API ulanyapdi)
            </Title>
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
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
              autoComplete="off"
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
              {loading ? "Yuborilmoqda..." : "Get started"}
            </Button>
          </form>
        </FormWrapper>
      </FormGrid>
      {toast && (
        <Toast>
          {toast.type === "loading" && (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle
                cx="11"
                cy="11"
                r="9"
                stroke="#539cd0"
                strokeWidth="3"
                opacity="0.3"
              />
              <circle
                cx="11"
                cy="11"
                r="9"
                stroke="#539cd0"
                strokeWidth="3"
                strokeDasharray="56"
                strokeDashoffset="36"
              />
            </svg>
          )}
          {toast.type === "success" && (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" fill="#eaf6fb" />
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
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" fill="#ffeaea" />
              <path
                d="M8 8L14 14M14 8L8 14"
                stroke="#e05a5a"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          )}
          <span>{toast.msg}</span>
        </Toast>
      )}
    </FormSection>
  );
}
