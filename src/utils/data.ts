import {
  PanelTop,
  Server,
  Database,
  PencilRuler,
  LucideIcon,
} from "lucide-react";

interface SkillSection {
  category: string;
  iconPath: LucideIcon;
  skillsList: {
    name: string;
    prificiencyLevel: string;
  }[];
}

interface Experience {
  title: string;
  date: string;
  responsible?: string;
  frontend?: string;
  backend?: string;
  others?: string;
  comment?: string[];
}

interface PortfolioItem {
  title: string;
  link?: string;
  githubLink?: string;
  img: string;
  comment?: string;
}

export const SKILL_SECTIONS: SkillSection[] = [
  {
    category: "Frontend",
    iconPath: PanelTop,
    skillsList: [
      { name: "HTML5", prificiencyLevel: "3ヶ月" },
      { name: "CSS3", prificiencyLevel: "3ヶ月" },
      { name: "JavaScript", prificiencyLevel: "3ヶ月" },
      { name: "JSP", prificiencyLevel: "3ヶ月" },
      { name: "React.js", prificiencyLevel: "Studying" },
    ],
  },
  {
    category: "Backend",
    iconPath: Server,
    skillsList: [
      { name: "Node.js", prificiencyLevel: "Studying" },
      { name: "Express.js", prificiencyLevel: "Studying" },
      { name: "Java", prificiencyLevel: "3ヶ月" },
    ],
  },
  {
    category: "Data Base",
    iconPath: Database,
    skillsList: [
      { name: "PostgreSQL", prificiencyLevel: "Studying" },
      { name: "MongoDB", prificiencyLevel: "Studying" },
      { name: "Oracle", prificiencyLevel: "3ヶ月" },
    ],
  },
  {
    category: "Tools",
    iconPath: PencilRuler,
    skillsList: [
      { name: "Git & GitHub", prificiencyLevel: "Studying" },
      { name: "SVN", prificiencyLevel: "3ヶ月" },
      { name: "Visual Studio Code", prificiencyLevel: "Studying" },
      { name: "Eclipse", prificiencyLevel: "3ヶ月" },
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    title: "帝京大学情報科学科通信教育課程",
    date: "2022年4月 - 2026年3月卒業予定",
    comment: [
      "IT分野の知識を深めるために、情報科学・情報工学の基礎知識から応用技術までを学習し、ネットワーク基礎、データベース設計、アルゴリズム、アセンブリ言語（CASL-ii）などの科目に取り組んでいます。",
      "プログラミングにおいては、Javaのオブジェクト指向プログラミングを用いた演習課題を通して開発スキルを身に着けています。",
      "また、数学の基礎理論や応用数学も学び、論理的思考力を強化しています",
      "ITについて体系的に学びたいという意欲から入学を決意し、現在も業務に支障がない範囲で継続的に学習を進めています。",
    ],
  },
  {
    title: "ラベル管理システム開発(Java)",
    date: "2024年8月 - 2024年10月（3ヶ月）",
    responsible: "詳細設計 => コーディング => 単体テスト仕様書作成",
    frontend: "JSP",
    backend: "WebLogic上で動く独自フレームワーク",
    others:
      "データベース:Oracle バージョン管理:SVN チーム人数: 4人 担当ステップ数:約1000ステップ×2画面",
    comment: [
      "先輩エンジニアとの密な連携を通じて、工程通りにプロジェクトを進行させ、技術スキルも向上させるとともに自信にもつながりました。",
    ],
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "ポートフォリオサイト",
    link: "#",
    githubLink: "https://github.com/segawa74/SegawaSite",
    img: "./assets/images/site-02.png",
    comment: "現在表示しているReactを使った自己紹介サイトです。",
  },
  {
    title: "時差グラフサイト",
    img: "#",
    comment: "作成中です",
  },
];
