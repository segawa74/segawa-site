"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitMail = async (data: Inputs) => {
    setIsSubmitting(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

    try {
      await emailjs.send(serviceId, templateId, data, publicId);
      toast({
        title: "送信成功",
        description: "メッセージが正常に送信されました。",
      });
      reset();
    } catch (error) {
      console.error("エラーが発生しました: " + error);
      toast({
        title: "送信エラー",
        description: "メッセージの送信中にエラーが発生しました。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>お問い合わせ</CardTitle>
        <CardDescription>
          以下のフォームに必要事項を入力してください。
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit(submitMail)} className="space-y-4">
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="name"> お名前 *</Label>
            <Input
              id="name"
              {...register("name", { required: "名前は必須です。" })}
              placeholder="山田 太郎"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス *</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "メールアドレスは必須です。" })}
              placeholder="example@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">内容 *</Label>
            <Textarea
              id="message"
              {...register("message", { required: "内容は必須です。" })}
              placeholder="お問い合わせ内容をご記入ください。"
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>
          <CardFooter className="flex justify-center py-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "送信中..." : "送信"}
            </Button>
          </CardFooter>
        </CardContent>
      </form>
    </Card>
  );
}
