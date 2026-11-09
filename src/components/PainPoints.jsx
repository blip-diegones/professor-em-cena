import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MicOff, AlertTriangle, BookOpen, Lightbulb } from 'lucide-react';

export default function PainPoints() {
  const painItems = [
    {
      icon: <Smartphone className="w-5 h-5 text-red-400" />,
      title: "Alunos Presos às Telas",
      desc: "Dificuldade constante de mantê-los focados e participativos por mais de 5 minutos, disputando a atenção com as redes sociais."
    },
    {
      icon: <MicOff className="w-5 h-5 text-amber-400" />,
      title: "Timidez e Travamento Total",
      desc: "Alunos que entram em pânico na hora de apresentar trabalhos, não projetam a voz, olham para o chão e evitam se expressar."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-purple-400" />,
      title: "Medo de Virar Bagunça",
      desc: "A vontade de propor dinâmicas e jogos corporais, mas com o receio constante de perder o controle e a disciplina da turma."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      title: "Teoria Demais, Prática de Menos",
      desc: "Cansaço de manuais pedagógicos cheios de história e termos abstratos que não ensinam o que fazer no chão da sala de aula."
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-brand-darkSurface border-y border-brand-cardBorder/70">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <span className="text-brand-ruby font-bold uppercase tracking-widest text-xs">
            A Realidade da Sala de Aula
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1.5">
            Você também sente que prender a atenção dos alunos hoje virou uma batalha?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Ensinar hoje exige muito mais que cuspe e giz. Se você enfrenta algum desses cenários diários, saiba que você não está sozinho:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {painItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-card p-5 rounded-2xl border border-brand-cardBorder flex items-start gap-4 hover:border-brand-cardBorder/80 transition-all shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Caixa de Virada de Chave */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-brand-goldLight font-bold text-base sm:text-lg mb-1">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            <span>O teatro na educação não serve para formar atores de televisão.</span>
          </div>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Ele é a ferramenta mais poderosa que existe para desenvolver escuta atenta, autoconfiança, empatia e presença cênica nos alunos e no próprio professor.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

