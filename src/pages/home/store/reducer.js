import { fromJS } from 'immutable';
import showImg1 from '../../../statics/show1.png';
import showImg2 from '../../../statics/show2.png';
import showImg3 from '../../../statics/show3.png';
import showImg4 from '../../../statics/show4.png';  
import articleListImg1 from '../../../statics/articleList1.jpeg';
import articleListImg2 from '../../../statics/articleList2.png';  
import articleListImg3 from '../../../statics/articleList3.jpg';  
import articleListImg4 from '../../../statics/articleList4.jpg';  
import articleListImg5 from '../../../statics/articleList5.jpg';  
import articleListImg6 from '../../../statics/articleList6.jpg'; 
import articleListImg7 from '../../../statics/articleList7.jpg';  
import recommendImg1 from '../../../statics/recommend1.png'; 
import recommendImg2 from '../../../statics/recommend2.png'; 
import recommendImg3 from '../../../statics/recommend3.png'; 
import recommendImg4 from '../../../statics/recommend4.png'; 
import * as actionTypes from './actionTypes';  

const defaultState = fromJS({
    image: [
    {
        id: 0,
        title: '简书2019年度总结',
        pic: showImg1,
    },
    {
        id: 1,
        title: '2020元的徽章',
        pic: showImg2,
    },
    {
        id: 2,
        title: '吃货',
        pic: showImg3,
    },
    {
        id: 3,
        title: '女孩',
        pic: showImg4,
    }],
    offset: -625,
    picIndex: 0,
    isPlaying: true,
    articleListData: [
        {
            id: 1,
            title: '书籍中有哪些句子容易触动人心？',
            desc: '《迟到的间隔年》 一个有信仰的人，不管成不成功，至少不会迷茫。 世事有时候很奇妙，做了一个决定便否定了很多的可能，却又诞生了其他的可能，产生与其...',
            beta: 16.7,
            author: '后羿不射日',
            comment: 2,
            like: 175,
            imgUrl: articleListImg1
        },
        {
            id: 2,
            title: '2019年读书计划',
            desc: '昨天晚上整理了一份2019年读书计划。现在已经是2月底了，马上就进入3月份了。再不制订读书计划，2019年又要在浑浑噩噩中度过了。 挑选了38本...',
            beta: 81.7,
            author: '不是雨季',
            comment: 201,
            like: 1695,
            imgUrl: articleListImg2
        },
        {
            id: 3,
            title: '《聪明人都是清单控》——让复杂的事情简单化',
            desc: '通过阅读《聪明人都是清单》控这本书，感觉到以前自己的人生白活了，浪费了40年的大好时光，虽然以前也意识到自己的生活需要规划，也有这个计划，列过清...',
            beta: 15.9,
            author: '崔万华',
            comment: 1,
            like: 86,
            imgUrl: articleListImg3
        },
        {
            id: 4,
            title: '馋哭朋友圈的烧卖我也会了',
            desc: '闺蜜的婆婆是山西人，擅长做面食，经常做做不同口味的打卤面，只有烧卖，一年也才做几次，我有幸吃过几次，味道是很好，无论热的凉的。 上次...',
            beta: 7.8,
            author: '七月的桃之妖妖',
            comment: 3,
            like: 27,
            imgUrl: articleListImg4
        },
        {
            id: 5,
            title: '我的炒股经历',
            desc: '我是一名公务员，最基层的那种。我的工作性质要求我，要经常与这个国家最贫困的一群人沟通，并帮助他们富起来。 一直以来，我对贫穷的认识，都停留在表面...',
            beta: 28.2,
            author: '带小狗看夕阳',
            comment: 24,
            like: 57,
        },
        {
            id: 6,
            title: '最相信一见钟情的星座',
            desc: '有时候，两个素未谋面的陌生人第一次见面就会产生“相见恨晚”的感觉，那种莫名其妙的缘分拉扯着你们，好像你们就是前世错过的姻缘。 那么，哪些星座最相...',
            beta: 6.9,
            author: '玛格丽特不想念',
            comment: 9,
            like: 28,
            imgUrl: articleListImg5
        },
        {
            id: 7,
            title: '你还在用Excel? 用这工具，5步完爆Excel表格',
            desc: '有人问，把Excel用到极致是一种什么体验？ 在以前公司上班的时候，每天都要出报表，觉得很麻烦。于是就自己用Excel的函数、控件、VBA等做了...',
            beta: 7.9,
            author: '数据分析不是个事儿',
            comment: 2,
            like: 77,
            imgUrl: articleListImg6
        },
        {
            id: 8,
            title: '画画也是可以玩的',
            desc: '最近在学心理学简笔画，起初只是抱着一种信任和好奇的心情报了名！上了第一堂课就被心慈老师温柔的声音和力量征服！ 拿起笔随意表达，原来画画也可以这么...',
            beta: 15.6,
            author: 'Tina_J',
            comment: 15,
            like: 33,
            imgUrl: articleListImg7
        }
    ],
    haveMore: true,
    everyMoreShow:5,
    moreCount: 1,
    recommend: [
        {
            id: 1,
            imgUrl: recommendImg1
        },
        {
            id: 2,
            imgUrl: recommendImg2
        },
        {
            id: 3,
            imgUrl: recommendImg3
        },
        {
            id: 4,
            imgUrl: recommendImg4
        }
    ],
    writerData: [],
    writerPage: 1
    


});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_PREV_PIC:
            return state.set('offset', action.offset).set('picIndex', action.picIndex) 
        case actionTypes.GET_NEXT_PIC:
            return state.set('offset', action.offset).set('picIndex', action.picIndex) 
        case actionTypes.GET_ANY_PIC:
            return state.set('offset', action.offset).set('picIndex', action.picIndex) 
        case actionTypes.PLAY_STATE_CHANGE:
            return state.set('isPlaying', action.data) 
        case actionTypes.GET_MORE_ARTICLE:
            return state.set('moreCount', action.count).set('haveMore', action.haveMore)
        case actionTypes.GET_WRITER_DATA:
            return state.set('writerData', fromJS(action.data))
        case actionTypes.CHANGE_WRITER_PAGE:
            return state.set('writerPage', action.page)
        default:
            return state;
    }
}