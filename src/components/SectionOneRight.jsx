import SectionOneCard from './SectionOneCard'
const SectionOneRight = (props)=>{
    return(
        <>
        <div className="section-one-right w-[70%] flex flex-nowrap gap-[40px] overflow-auto">
        {props.userData.map(function(elem,index){
            return<SectionOneCard key={index} idx={index+1} profilePic={elem.profile} userIntro={elem.intro} userTag={elem.tag} tagColor={elem.tagColor}/>
        })}
        </div>
        </>
    )
}
export default SectionOneRight;