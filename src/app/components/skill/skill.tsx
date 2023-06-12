import Image from "next/image"

import "./skill.scss"

interface SkillProps {
    image: string,
    years: string,
    measure: number,
}

export function Skill(props : SkillProps){
    return(
        <div className="experience-language">
            <Image
                src={props.image}
                alt="Skill Logo"
                width={40}
                height={40}
                priority
            />
            <div className="experience-unit">
                <div className={`experience-measure measure-${props.measure}`}>
                    <span>{props.years}</span>
                </div>
            </div>
      </div>
    )
}