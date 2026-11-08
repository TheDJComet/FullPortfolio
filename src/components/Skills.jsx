import SmoothTab from '@/components/kokonutui/smooth-tab'
import { education, skillGroups, training } from '@/data/portfolio'

function SkillList({ skills }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill} className="rounded-full border border-border px-3 py-1 text-sm sm:text-base">
          {skill}
        </li>
      ))}
    </ul>
  )
}

const tabs = skillGroups.map((group) => ({
  id: group.id,
  title: group.title,
  content: <SkillList skills={group.skills} />,
}))

const cardClass = 'rounded-2xl border border-border bg-primary p-5 sm:p-6'
const labelClass = 'font-mono text-xs tracking-wider text-mint uppercase'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Skills</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="min-w-0 lg:col-span-2 lg:row-span-2">
            <SmoothTab
              items={tabs}
              label="Skill categories"
              activeColor="bg-secondary dark:bg-secondary"
              activeTextColor="text-white dark:text-white"
              className="max-w-none"
            />
          </div>
          <div className={cardClass}>
            <p className={labelClass}>Education</p>
            <h3 className="mt-3 text-xl font-semibold">{education.school}</h3>
            <ul className="mt-2">
              {education.degrees.map((degree) => (
                <li key={degree}>{degree}</li>
              ))}
            </ul>
            <p className="mt-2 text-white/85">{education.detail}</p>
          </div>
          <div className={cardClass}>
            <p className={labelClass}>Training</p>
            <h3 className="mt-3 text-xl font-semibold">{training.title}</h3>
            <p className="mt-2 text-white/85">{training.summary}</p>
            <p className="mt-2 text-white/85">Topics include {training.topics.join(', ')}.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
