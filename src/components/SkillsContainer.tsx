import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

const SkillsContainer = () => {
    const skills = useTranslations('Skills');

    const skillsData = [
        { name: skills('skillsData.firstSkill.name'), description: skills('skillsData.firstSkill.description'), icon: skills('skillsData.firstSkill.icon') },
        { name: skills('skillsData.secondSkill.name'), description: skills('skillsData.secondSkill.description'), icon: skills('skillsData.secondSkill.icon') },
        { name: skills('skillsData.thirdSkill.name'), description: skills('skillsData.thirdSkill.description'), icon: skills('skillsData.thirdSkill.icon') },
        { name: skills('skillsData.fourthSkill.name'), description: skills('skillsData.fourthSkill.description'), icon: skills('skillsData.fourthSkill.icon') },
        { name: skills('skillsData.fifthSkill.name'), description: skills('skillsData.fifthSkill.description'), icon: skills('skillsData.fifthSkill.icon') },
        { name: skills('skillsData.sixthSkill.name'), description: skills('skillsData.sixthSkill.description'), icon: skills('skillsData.sixthSkill.icon') }
    ];

    return (
        <section className="max-width section-padding">
            <SectionHeading
                title={skills('SectionHeading.title')}
                subtitle={skills('SectionHeading.subtitle')}
            />
            <Skills skillsData={skillsData}/>
        </section>
    );
}

export default SkillsContainer;




