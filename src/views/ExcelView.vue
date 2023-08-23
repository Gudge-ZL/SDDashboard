<template>
    <div class="excelBox">
        <div id="new1">
            <div class="title">新建款项</div>

            <div class="hDivider"></div>

            <div class="subWrapper">
                <span class="inputWrapper">
                    <label for="主体">
                        <div>主体</div>
                    </label>
                    <input id="主体" type="text" v-model="object">

                </span>
                <span class="inputWrapper">
                    <label for="机构">
                        <div>机构</div>
                    </label>
                    <input id="机构" type="text" v-model="subject">
                    
                </span>
            </div>

            <div class="subWrapper">
                <span class="inputWrapper">
                    <label for="金额">
                        <div>金额/万</div>
                    </label>
                    <input id="金额" type="number" v-model="count">
                    
                </span>
                <span class="inputWrapper">
                    <label for="合同成本">
                        <div>合同成本/%</div>
                    </label>
                    <input id="合同成本" type="number" v-model="rate">
                    
                </span>
            </div>

            <div class="subWrapper">
                <span class="inputWrapper">
                    <div class="labelWrapper">类型</div>
                    <div class="radioWrapper">
                        <input type="radio" name="type" id="新增" class="radio" value="新增" v-model="type">
                        <label for="新增" class="radioLabel">新增</label>
                        <input type="radio" name="type" id="转贷" class="radio" value="转贷" v-model="type">
                        <label for="转贷" class="radioLabel">转贷</label>
                    </div>
                </span>
                
                <span class="inputWrapper">
                    <div class="labelWrapper">付息方式</div>
                    <div class="radioWrapper">
                        <input type="radio" name="pay" id="每月" class="radio" value="每月" v-model="pay">
                        <label for="每月" class="radioLabel">每月</label>
                        <input type="radio" name="pay" id="每季" class="radio" value="每季" v-model="pay">
                        <label for="每季" class="radioLabel">每季</label>
                    </div>
                </span>
            </div>

            <div class="subWrapper">
                <span class="inputWrapper">
                    <label for="年限">
                        <div>年限</div>
                    </label>
                    <input id="年限" type="text" v-model="span">
                    
                </span>
            </div>

            <div class="subWrapper">
                <span class="inputWrapper">
                    <label for="到账">
                        <div>到账日期</div>
                    </label>
                    <input id="到账" type="date" v-model="start">
                    
                </span>
            </div>

            <div class="subWrapper">
                <span class="inputWrapper">
                    <label for="到期">
                        <div>到期日期</div>
                    </label>
                    <input id="到期" type="date" v-model="end">
                    
                </span>
            </div>

            <div class="subWrapper">
                <button @click="submit">
                    <div class="iconText">提交</div>
                </button>
                
                <button @click="reset">
                    <div class="iconText">重置</div>
                </button>
            </div>
        </div>

        <div class="vDivider">

        </div>
        
        <div id="new2">
            <div class="title">还款计划</div>
            
            <div class="hDivider"></div>

            <div id="preset">
                <div class="subWrapper">
                    <span class="inputWrapper">
                        <div class="radioWrapper">
                            <input type="radio" name="repay" id="每月repay" class="radio" value="每月" v-model="repay">
                            <label for="每月repay" class="radioLabel">每月</label>
                            <input type="radio" name="repay" id="每季repay" class="radio" value="每季" v-model="repay">
                            <label for="每季repay" class="radioLabel">每季</label>
                            <input type="radio" name="repay" id="自定义" class="radio" value="自定义" v-model="repay">
                            <label for="自定义" class="radioLabel">自定义</label>
                        </div>
                    </span>
                </div>

            </div>

            <div id="custom" v-if="repay=='自定义'">
                
                <div class="subWrapper">
                    <span class="inputWrapper">
                        <div class="labelWrapper">还款日期</div>
                    </span>
                    <span class="inputWrapper">
                        <div class="labelWrapper">还款金额/万</div>
                    </span>
                </div>
                    
                <div v-for="plan in plans" :key="plan.id">
                    <div class="subWrapper">
                        <span class="inputWrapper">
                            <input type="date" v-model="plan.time">
                        </span>
                        <span class="inputWrapper">
                            <input type="number" v-model="plan.count">
                        </span>
                    </div>
                </div>

                <button @click="newPlan">
                    <div class="iconText">新增还款计划</div>
                </button>
                
                <button @click="delPlan">
                    <div class="iconText">删除还款计划</div>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
    name: "ExcelView",

    data() {
      return {
        object: "",
        subject: "",
        count: null,
        rate: null,
        type: "",
        pay: "",
        span: "",
        start: "",
        end: "",
        plans: [],
        nextId: 0,
        repay: "",
      }
    }, 
    methods: {
        submit() {
            //console.log(this.object);
            //console.log(this.count);
            //console.log(this.rate);
            //console.log(this.type);
            //console.log(this.start);
            //console.log(this.plans);

            if (this.object==null || this.object=="") alert("主体未填写");
            else if (this.subject==null || this.subject=="") alert("机构未填写");
            else if (this.count==null) alert("金额未填写");
            else if (this.rate==null) alert("合同成本未填写");
            else if (this.type==null || this.type=="") alert("类型未填写");
            else if (this.pay==null || this.pay=="") alert("付息方式未填写");
            else if (this.span==null || this.span=="") alert("年限未填写");
            else if (this.start==null || this.start=="") alert("到账时间未填写");
            else if (this.end==null || this.end=="") alert("到期时间未填写");
            else {
                var good_plan = true;
                if (this.repay=="自定义") {
                    var total = 0;
                    for (const plan of this.plans) {
                        if (plan.count>0 && plan.time!="") total+=plan.count;
                        else good_plan=false;
                    }
                    if (total!=this.count) good_plan=false;
                }
                if (!good_plan) alert("还款计划有误");
                else {
                    var form = { "subject": this.subject,
                                "object": this.object,
                                "count": this.count,
                                "rate": this.rate,
                                "type": this.type,
                                "span": this.span,
                                "start": this.start,
                                "end": this.end,
                                "pay": this.pay,
                                "repay": this.repay,
                                "plans": this.plans,
                            };
                    
                    var url = 'http://39347057.r10.cpolar.top';
                    axios.post(url, form)
                    .then(function (response) {
                        alert(response.data);
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                }
            }
            
        },
        reset() {
            this.object = "";
            this.subject = "";
            this.count = null;
            this.rate = null;
            this.type = "";
            this.span = "";
            this.start = "";
            this.end = "";
            this.pay = "";
            this.repay = "";
            this.plans = [];
        },
        newPlan() {
            if (this.nextId<6) {
                this.plans.push({"id": this.nextId, "time": "", "count": null});
                this.nextId+=1;
            } else {
                alert("计划过多");
            }
        },
        delPlan() {
            this.plans.pop();
            this.nextId-=1;
        }
    }
}
</script>

<style>
.excelBox {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

#new1 {
    flex: 10;
    max-width: 750px;
}

#new2 {
    flex: 1;
}

.vDivider {
    width: 1px;
    height: 90%;
    margin-top: 2.5%;
    background: #767676;;
} 

.hDivider {
    width: 80%;
    height: 1px;
    margin-left: 50px;
    background: #767676;;
} 

.title {
    text-align: left;
    font-weight: 300;
    font-size: 28px;
    color: #111;
    margin-top: 40px;
    margin-left: 50px;
    margin-bottom: 10px;
}

.subWrapper {
    display: flex;
    flex-direction: row;
    margin-left: 50px;
}

.inputWrapper {
    text-align: left;
    margin-top: 20px;
    margin-right: 80px;
    width: 100%;
}

.radioWrapper {
    display: flex;
    flex-direction: row;
    max-width: 488px;
    height: 24px;
    align-content: center;
}

.radio {
    width: 40px;
    height: 24px;
    margin-right: 8px;
}

.radioLabel {
    margin-top: 6px;
    padding-right: 40px;
    font-size: 16px;
}

label {
    display: block;
    width: auto;
    cursor: pointer;
    font-size: 12px;
    padding-bottom: 8px;
    height: 16px;
}

.labelWrapper {
    display: block;
    width: auto;
    cursor: pointer;
    font-size: 12px;
    padding-bottom: 8px;
    height: 16px;
}

input {
    display: block;
    border-radius: 16px;
    border-style: solid;
    border-width: 2px;
    border-color: #cdcdcd;
    padding: 8px 16px;
    width: 100%;
    height: 28px;
    font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ Pro W3,Hiragino Kaku Gothic Pro,ãƒ¡ã‚¤ãƒªã‚ª,Meiryo,ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    overflow: hidden;
    text-overflow: ellipsis;
}

input:not([type=radio]):focus {
    box-shadow: 0 0 0 4px #c1f1e0;
    outline: 0;
}

input:hover {
    border-color: #767676;
}

button {
    min-width: 80px;
    height: 45px;
    border-radius: 16px;
    border-style: solid;
    border-width: 1px;
    border-color: #cdcdcd73;
    background-color: white;
    margin-top: 50px;
    margin-right: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0,0,0,.2);
    transition: all 0.3s ease 0s;
}

button:hover {
    box-shadow: 4px 4px 5px rgba(0,0,0,.2);
}

.iconText {
    display:inline-block;
    min-width: 40px;
    font-size: 15px;
    text-align: center;
    font-weight: 400;
    color: #5f5f5f;
}
</style>