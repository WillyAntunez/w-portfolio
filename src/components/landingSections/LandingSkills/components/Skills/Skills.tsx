import './Skills.scss';

interface SkillBarProps {
    label: string;
    percentage: number;
}

interface SkillsProps {
    skills: SkillBarProps[];
    title?: string;
    description?: string;
}

export const Skills = ({ skills = [], title, description }: SkillsProps) => {
    return (
        <div className="skills mt-4">
            <div>
                <h3 className="skills__title">{title}</h3>
                <p className="skills__description mt-1">{description}</p>
            </div>

            <div className="skills__skills-container mt-2">
                {skills.map((skill, index) => (
                    <div className="skill-bar" key={index}>
                        <div className="skill-bar__title">{skill.label}</div>

                        <div className="skill-bar__bar">
                            <div
                                className="skill-bar__fill"
                                style={{ width: `${skill.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
