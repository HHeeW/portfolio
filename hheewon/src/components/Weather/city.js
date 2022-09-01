
const county=(c)=>{
    switch(c){
        case "Gimpo-si":
            return "김포시";
        case "Seoul":
            return "서울"
        case "Busan":
            return "부산";
        case "Gangwon-do":
            return '강원도'
        case "Chuncheon":
            return "춘천";
        case "Chuncheon-si":
            return "춘천시";
        case "Jeju City":
            return "제주도";
        case "Jeju-do":
            return "제주도";
        case "Yongsan":
            return "용산";
        case "Sindaebang-dong":
            return "신대방";
        case "Haenam":
            return "해남";
        case "Incheon":
            return "인천";
        default:
            return c;
    }
}

export default county