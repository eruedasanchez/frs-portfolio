import { useTranslations } from "next-intl";
import Milestone from "./Milestone";
import SectionHeading from "./SectionHeading";

const MilestoneContainer = () => {
    const milestoneContainer = useTranslations('MilestoneContainer');
    
    const timelineData = [
        { title: milestoneContainer('TimelineData.firstTimeline.title'), duration: milestoneContainer('TimelineData.firstTimeline.duration'), description: milestoneContainer('TimelineData.firstTimeline.description') },
        { title: milestoneContainer('TimelineData.secondTimeline.title'), duration:milestoneContainer('TimelineData.secondTimeline.duration'), description:milestoneContainer('TimelineData.secondTimeline.description') },
        { title: milestoneContainer('TimelineData.thirdTimeline.title'), duration: milestoneContainer('TimelineData.thirdTimeline.duration'),  description: milestoneContainer('TimelineData.thirdTimeline.description') },
        { title: milestoneContainer('TimelineData.fourthTimeline.title'), duration:milestoneContainer('TimelineData.fourthTimeline.duration'), description:milestoneContainer('TimelineData.fourthTimeline.description') }
    ];

    return (
        <section className="max-width section-padding">
            <SectionHeading
                title={milestoneContainer('SectionHeading.title')}
                subtitle={milestoneContainer('SectionHeading.subtitle')}
            />
            <Milestone timeline={timelineData}/>
        </section>
    );
}

export default MilestoneContainer;

