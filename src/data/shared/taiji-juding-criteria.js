// Taijiquan, Taijijian, and Taijishan deduction and non-conformity criteria based on IWUF rules
export const taijiDeductions = {
  "deduction_standards": {
    "general_rules": [
      "Within a single technique, should there be 1 or more errors, 0.1 point will only be deducted once.",
      "Within a single group of movements, should there be 2 or more occurrences of the same weapon technique errors, 0.1 point will only be deducted once.",
      "Within a single group of movements, should there be 2 or more occurrences of the same footwork error, 0.1 point will only be deducted once.",
      "Within a single group of movements, should there be 2 or more occurrences of the same stance errors, 0.1 point will only be deducted once.",
      "Within a single routine, should there be multiple errors for Quán (Fist), Zhǎng (Palm), Jiàn Zhǐ (Sword Fingers), Body Posture, and Hand Techniques. The maximum deduction for each hand form, body posture and hand technique will be 0.3 points.",
      "Knee and toes of supporting leg misaligned refers to the knee-tip of the supporting leg being drawn in and surpassing the vertical line of the medial portion of the supporting foot when stepping."
    ]
  },
  "movements": {
    "拳": {
      "chinese": "拳",
      "pinyin": "Quán",
      "english": "Fist",
      "code": "01",
      "deductions": [
        {
          "chinese": "拳面不平",
          "english": "Face of fist uneven"
        },
        {
          "chinese": "拇指未压在食指和中指第二指节上",
          "english": "The thumb is not pressing on the second segment of both the index and middle fingers"
        }
      ]
    },
    "掌": {
      "chinese": "掌",
      "pinyin": "Zhǎng",
      "english": "Palm",
      "code": "02",
      "deductions": [
        {
          "chinese": "手指并拢",
          "english": "Four fingers not separated (excluding special techniques)"
        },
        {
          "chinese": "手指伸翘",
          "english": "The fingers are straightened"
        },
        {
          "chinese": "虎口未成弧形",
          "english": "Tigers mouth (Abductor Pollicis Transversus) not rounded (excluding special techniques)"
        },
        {
          "chinese": "掌心外凸",
          "english": "The center of the palm not drawn in and rounded (excluding special techniques)"
        }
      ]
    },
    "剑指": {
      "chinese": "剑指",
      "pinyin": "Jiàn Zhǐ",
      "english": "Sword Fingers",
      "code": "04",
      "deductions": [
        {
          "chinese": "食指与中指未伸直并拢",
          "english": "Index finger and middle finger not kept straight and together"
        },
        {
          "chinese": "拇指未压在无名指与小指上",
          "english": "Thumb not pressing on the ring finger and little finger"
        }
      ]
    },
    "手法": {
      "chinese": "手法",
      "pinyin": "Shǒu Fǎ",
      "english": "Hand Techniques",
      "code": "05",
      "deductions": [
        {
          "chinese": "抬肘",
          "english": "Elbow lifted"
        },
        {
          "chinese": "直臂",
          "english": "Arm straightened"
        },
        {
          "chinese": "夹腋",
          "english": "Armpit closed"
        }
      ]
    },
    "身型": {
      "chinese": "身型",
      "pinyin": "Shēn Xíng",
      "english": "Body Posture",
      "code": "06",
      "deductions": [
        {
          "chinese": "头、身不正",
          "english": "Head and body not aligned"
        },
        {
          "chinese": "驼背弓腰突臀",
          "english": "Shoulders hunched, rounded lower back, buttocks sticking out"
        },
        {
          "chinese": "耸肩",
          "english": "Shoulders shrugged"
        },
        {
          "chinese": "扭腰摆臀",
          "english": "Waist twisted"
        }
      ]
    },
    "低势前蹬踩脚平衡": {
      "chinese": "低势前蹬踩脚平衡",
      "pinyin": "Dīshì Qián Dēng Cǎi Jiǎo Píng Héng",
      "english": "Forward Sole Kick with Low Step Balance",
      "code": "17",
      "deductions": [
        {
          "chinese": "支撑腿脚跟离地",
          "english": "The heel of the supporting leg is raised"
        },
        {
          "chinese": "前腿膝部弯曲",
          "english": "Kicking leg bent at knee"
        },
        {
          "chinese": "脚尖未外展",
          "english": "The foot of the kicking leg is not turned outwards"
        }
      ],
      "non_conformity": [
        {
          "chinese": "支撑腿大腿高于水平",
          "english": "Thigh of supporting leg above horizontal level"
        },
        {
          "chinese": "蹬踩腿未由曲到伸",
          "english": "The extended kicking leg does not transit from obvious bent to completely straight"
        },
        {
          "chinese": "蹬踩脚触地",
          "english": "Foot of the extended kicking leg touches the carpet"
        }
      ]
    },
    "前举腿低势平衡": {
      "chinese": "前举腿低势平衡",
      "pinyin": "Qián Jǔ Tuǐ Dī Shì Píng Héng",
      "english": "Low Balance with Leg Stretched Forward",
      "code": "18",
      "deductions": [
        {
          "chinese": "屈蹲过程中前举腿弯曲或低于水平",
          "english": "Forward stretched leg bends and/or drops below horizontal level at any point during the transition from standing to squatting"
        }
      ],
      "non_conformity": [
        {
          "chinese": "支撑腿大腿高于水平",
          "english": "Thigh of supporting leg above horizontal level"
        },
        {
          "chinese": "手扶按支撑腿",
          "english": "Hand is supporting/pressing on the supporting leg"
        }
      ]
    },
    "后插腿低势平衡": {
      "chinese": "后插腿低势平衡",
      "pinyin": "Hòu Chā Tuǐ Dī Shì Píng Héng",
      "english": "Low Balance with Leg Crossed Behind",
      "code": "19",
      "deductions": [
        {
          "chinese": "插出腿脚触地",
          "english": "The foot of the leg crossed behind the supporting leg makes contact with the ground"
        }
      ],
      "non_conformity": [
        {
          "chinese": "支撑腿大腿高于水平",
          "english": "Thigh of supporting leg above horizontal level"
        },
        {
          "chinese": "手扶按支撑腿",
          "english": "Hand is supporting/pressing on the supporting leg"
        }
      ]
    },
    "跌叉": {
      "chinese": "跌叉",
      "pinyin": "Diē Chà",
      "english": "Hurdler's Split Position",
      "code": "22",
      "deductions": [
        {
          "chinese": "前腿脚内扣触地",
          "english": "Front foot turns in and touches the ground"
        },
        {
          "chinese": "后腿两大腿夹角小于45°",
          "english": "Angle between the two legs is 45° or less"
        }
      ]
    },
    "分脚": {
      "chinese": "分脚",
      "pinyin": "Fēn Jiǎo",
      "english": "Parting Kick",
      "code": "23",
      "deductions": [
        {
          "chinese": "上举腿低于水平",
          "english": "The raised leg is below horizontal level"
        },
        {
          "chinese": "上举腿未伸直",
          "english": "The raised leg is bent"
        }
      ],
      "non_conformity": [
        {
          "chinese": "上举腿脚跟低于肩",
          "english": "Heel of the kicking leg is below shoulder level"
        }
      ]
    },
    "蹬脚": {
      "chinese": "蹬脚",
      "pinyin": "Dēng Jiǎo",
      "english": "Heel Kick",
      "code": "23",
      "deductions": [
        {
          "chinese": "上举腿低于水平",
          "english": "The raised leg is below horizontal level"
        },
        {
          "chinese": "上举腿未伸直",
          "english": "The raised leg is bent"
        }
      ],
      "non_conformity": [
        {
          "chinese": "上举腿脚跟低于肩",
          "english": "Heel of the kicking leg is below shoulder level"
        }
      ]
    },
    "摆莲拍脚": {
      "chinese": "摆莲拍脚",
      "pinyin": "Bǎi Lián Pāi Jiǎo",
      "english": "Lotus Slap Kick",
      "code": "25",
      "deductions": [
        {
          "chinese": "击响时摆动腿弯曲",
          "english": "Kicking Leg Bent When Slapped"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
        }
      ]
    },
    "单拍脚": {
      "chinese": "单拍脚",
      "pinyin": "Dān Pāi Jiǎo",
      "english": "Front Slap Kick",
      "code": "25",
      "deductions": [
        {
          "chinese": "击响时摆动腿弯曲",
          "english": "Kicking Leg Bent When Slapped"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
        }
      ]
    },
    "提膝独立": {
      "chinese": "提膝（独立）",
      "pinyin": "Tí Xī Dú Lì",
      "english": "Single Knee Raised Position",
      "code": "26",
      "deductions": [
        {
          "chinese": "提膝未过腰",
          "english": "Raised knee not above waist level"
        }
      ]
    },
    "腾空飞脚": {
      "chinese": "腾空飞脚",
      "pinyin": "Téng Kōng Fēi Jiǎo",
      "english": "Jumping Front Slap Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of the slapped foot not above shoulder level"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过1步",
          "english": "Exceeding 1 run-up step"
        },
        {
          "chinese": "未腾空",
          "english": "Not Executed in the air"
        },
        {
          "chinese": "击响腿低于水平",
          "english": "Slapped foot lower than horizontal level"
        }
      ]
    },
    "旋风脚": {
      "chinese": "旋风脚",
      "pinyin": "Xuàn Fēng Jiǎo",
      "english": "Tornado Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of the slapped foot not above shoulder level"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过1步",
          "english": "Exceeding 1 run-up step"
        },
        {
          "chinese": "未腾空",
          "english": "Not Executed in the air"
        },
        {
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        },
        {
          "chinese": "击响腿低于水平",
          "english": "Slapped foot lower than horizontal level"
        }
      ]
    },
    "腾空摆莲": {
      "chinese": "腾空摆莲",
      "pinyin": "Téng Kōng Bǎi Lián",
      "english": "Jumping Lotus Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of the slapped foot not above shoulder level"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过1步",
          "english": "Exceeding 1 run-up step"
        },
        {
          "chinese": "未腾空",
          "english": "Not Executed in the air"
        },
        {
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        },
        {
          "chinese": "击响腿低于水平",
          "english": "Slapped foot lower than horizontal level"
        }
      ]
    },
    "腾空正踢腿": {
      "chinese": "腾空正踢腿",
      "pinyin": "Téng Kōng Zhèng Tī Tuǐ",
      "english": "Jumping Front Straight Kick",
      "code": "31",
      "deductions": [
        {
          "chinese": "踢腿脚触及或超过前额瞬间悬垂腿弯曲",
          "english": "The hanging leg is bend at the moment the toes of the kicking leg touches the forehead or above the forehead"
        },
        {
          "chinese": "踢腿脚触及或超过前额瞬间躯干与悬垂腿夹角小于135°",
          "english": "The angle between the torso and the hanging leg is less than 135° the moment the toes of the kicking leg touches the forehead or above the forehead"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过1步",
          "english": "Exceeding 1 run-up steps"
        },
        {
          "chinese": "未腾空",
          "english": "Not executed in the air"
        },
        {
          "chinese": "上踢腿脚尖未触及或未超过前额",
          "english": "The toes of the kicking leg do not touch or did not exceed the forehead"
        }
      ]
    },
    "弓步": {
      "chinese": "弓步",
      "pinyin": "Gōng Bù",
      "english": "Bow Stance",
      "code": "50",
      "deductions": [
        {
          "chinese": "前腿膝未达脚背或超出脚尖",
          "english": "Knee of front leg is not above the instep or in front of the toes"
        },
        {
          "chinese": "前腿大腿高于水平45°或低于水平",
          "english": "The thigh of the bending (front) leg is not held at a range from horizontal level to 45° degrees (excluding 45° degrees) above horizontal level"
        },
        {
          "chinese": "后腿脚掌任一部位明显离地",
          "english": "Any portion of the sole of the rear leg obviously off the floor"
        },
        {
          "chinese": "后腿脚尖未内扣",
          "english": "The rear foot is not hooked inwards with the toes pointing obliquely forwards"
        },
        {
          "chinese": "后腿跪膝",
          "english": "Obvious bending of the back legs"
        }
      ]
    },
    "马步": {
      "chinese": "马步",
      "pinyin": "Mǎ Bù",
      "english": "Horse Stance",
      "code": "51",
      "deductions": [
        {
          "chinese": "大腿高于水平45°或低于水平",
          "english": "The thigh/s are not held at a range from horizontal level to 45° (excluding 45°) above horizontal level"
        },
        {
          "chinese": "膝内扣",
          "english": "Knee/s collapsed inwards passed the medial portion of the foot/feet"
        }
      ]
    },
    "虚步": {
      "chinese": "虚步",
      "pinyin": "Xū Bù",
      "english": "Empty Stance",
      "code": "52",
      "deductions": [
        {
          "chinese": "前脚脚跟着地",
          "english": "Heel of front leg touches the floor"
        },
        {
          "chinese": "屈蹲腿膝与脚尖未对正",
          "english": "Knee and toes of supporting leg misaligned"
        }
      ]
    },
    "仆步": {
      "chinese": "仆步",
      "pinyin": "Pū Bù",
      "english": "Crouching Stance",
      "code": "53",
      "deductions": [
        {
          "chinese": "屈蹲腿未全蹲",
          "english": "Squatting leg is not in full squat with the back of the thigh in contact with the calf"
        },
        {
          "chinese": "平铺腿未伸直",
          "english": "The extended leg is not completely straight"
        },
        {
          "chinese": "平铺腿全脚掌未内扣着地",
          "english": "Extended leg's foot is not hooked inwards with the sole completely flat on the ground"
        }
      ]
    },
    "上步": {
      "chinese": "上步",
      "pinyin": "Shàng Bù",
      "english": "Advancing Step",
      "code": "59",
      "deductions": [
        {
          "chinese": "支撑腿膝与脚尖未对正",
          "english": "Knee and toes of supporting leg misaligned"
        },
        {
          "chinese": "脚拖地（特殊动作要求除外）",
          "english": "Foot is dragged when stepping (excluding special techniques)"
        },
        {
          "chinese": "移动时重心起伏",
          "english": "Center of gravity moving/fluctuating up and down when stepping"
        },
        {
          "chinese": "上步时抬起脚脚尖高于踝关节",
          "english": "Toes of the raised foot is above the ankle of the other leg when advancing"
        }
      ]
    },
    "退步": {
      "chinese": "退步",
      "pinyin": "Tuì Bù",
      "english": "Retreating Step",
      "code": "59",
      "deductions": [
        {
          "chinese": "支撑腿膝与脚尖未对正",
          "english": "Knee and toes of supporting leg misaligned"
        },
        {
          "chinese": "脚拖地（特殊动作要求除外）",
          "english": "Foot is dragged when stepping (excluding special techniques)"
        },
        {
          "chinese": "移动时重心起伏",
          "english": "Center of gravity moving/fluctuating up and down when stepping"
        },
        {
          "chinese": "上步时抬起脚脚尖高于踝关节",
          "english": "Toes of the raised foot is above the ankle of the other leg when advancing"
        }
      ]
    },
    "进步": {
      "chinese": "进步",
      "pinyin": "Jìn Bù",
      "english": "Forward Step",
      "code": "59",
      "deductions": [
        {
          "chinese": "支撑腿膝与脚尖未对正",
          "english": "Knee and toes of supporting leg misaligned"
        },
        {
          "chinese": "脚拖地（特殊动作要求除外）",
          "english": "Foot is dragged when stepping (excluding special techniques)"
        },
        {
          "chinese": "移动时重心起伏",
          "english": "Center of gravity moving/fluctuating up and down when stepping"
        },
        {
          "chinese": "上步时抬起脚脚尖高于踝关节",
          "english": "Toes of the raised foot is above the ankle of the other leg when advancing"
        }
      ]
    },
    "跟步": {
      "chinese": "跟步",
      "pinyin": "Gēn Bù",
      "english": "Follow-up Step",
      "code": "59",
      "deductions": [
        {
          "chinese": "支撑腿膝与脚尖未对正",
          "english": "Knee and toes of supporting leg misaligned"
        },
        {
          "chinese": "脚拖地（特殊动作要求除外）",
          "english": "Foot is dragged when stepping (excluding special techniques)"
        },
        {
          "chinese": "移动时重心起伏",
          "english": "Center of gravity moving/fluctuating up and down when stepping"
        },
        {
          "chinese": "上步时抬起脚脚尖高于踝关节",
          "english": "Toes of the raised foot is above the ankle of the other leg when advancing"
        }
      ]
    },
    "侧行步": {
      "chinese": "侧行步",
      "pinyin": "Cè Xíng Bù",
      "english": "Sideways Step",
      "code": "59",
      "deductions": [
        {
          "chinese": "支撑腿膝与脚尖未对正",
          "english": "Knee and toes of supporting leg misaligned"
        },
        {
          "chinese": "脚拖地（特殊动作要求除外）",
          "english": "Foot is dragged when stepping (excluding special techniques)"
        },
        {
          "chinese": "移动时重心起伏",
          "english": "Center of gravity moving/fluctuating up and down when stepping"
        },
        {
          "chinese": "上步时抬起脚脚尖高于踝关节",
          "english": "Toes of the raised foot is above the ankle of the other leg when advancing"
        }
      ]
    },
    "挂剑": {
      "chinese": "挂剑",
      "pinyin": "Guà Jiàn",
      "english": "Straight Sword Hooking Parry",
      "code": "60",
      "deductions": [
        {
          "chinese": "直腕",
          "english": "Straight sword/Fan and forearm are aligned"
        },
        {
          "chinese": "未明显成立圆",
          "english": "No obvious vertical circle formed"
        }
      ]
    },
    "撩剑": {
      "chinese": "撩剑",
      "pinyin": "Liāo Jiàn",
      "english": "Straight Sword Uppercut",
      "code": "60",
      "deductions": [
        {
          "chinese": "直腕",
          "english": "Straight sword/Fan and forearm are aligned"
        },
        {
          "chinese": "未明显成立圆",
          "english": "No obvious vertical circle formed"
        }
      ]
    },
    "挂扇": {
      "chinese": "挂扇",
      "pinyin": "Guà Shàn",
      "english": "Fan Hooking Parry",
      "code": "60",
      "deductions": [
        {
          "chinese": "直腕",
          "english": "Straight sword/Fan and forearm are aligned"
        },
        {
          "chinese": "未明显成立圆",
          "english": "No obvious vertical circle formed"
        }
      ]
    },
    "撩扇": {
      "chinese": "撩扇",
      "pinyin": "Liāo Shàn",
      "english": "Fan Uppercut",
      "code": "60",
      "deductions": [
        {
          "chinese": "直腕",
          "english": "Straight sword/Fan and forearm are aligned"
        },
        {
          "chinese": "未明显成立圆",
          "english": "No obvious vertical circle formed"
        }
      ]
    },
    "握剑": {
      "chinese": "握剑",
      "pinyin": "Wò Jiàn",
      "english": "Gripping the Straight sword",
      "code": "61",
      "deductions": [
        {
          "chinese": "手指触及剑刃",
          "english": "Any finger wraps around the top of the hand guard and touches the edge of the blade"
        },
        {
          "chinese": "开扇时手未握扇骨底部扇面未完全展开，臂与扇大骨未呈一直线",
          "english": "When opening up the fan, the hand is not holding the bottom of the fan ribs, the fan surface is not fully opened (less than 180°), and the fan's major ribs is not aligned with the arm when the fan surface is opened"
        },
        {
          "chinese": "合扇时两扇大骨未合拢",
          "english": "The two major ribs are not closed together when the fan is fully collapsed"
        }
      ]
    },
    "开扇": {
      "chinese": "开扇",
      "pinyin": "Kāi Shàn",
      "english": "Fan Opening",
      "code": "61",
      "deductions": [
        {
          "chinese": "手指触及剑刃",
          "english": "Any finger wraps around the top of the hand guard and touches the edge of the blade"
        },
        {
          "chinese": "开扇时手未握扇骨底部扇面未完全展开，臂与扇大骨未呈一直线",
          "english": "When opening up the fan, the hand is not holding the bottom of the fan ribs, the fan surface is not fully opened (less than 180°), and the fan's major ribs is not aligned with the arm when the fan surface is opened"
        },
        {
          "chinese": "合扇时两扇大骨未合拢",
          "english": "The two major ribs are not closed together when the fan is fully collapsed"
        }
      ]
    },
    "合扇": {
      "chinese": "合扇",
      "pinyin": "Hé Shàn",
      "english": "Fan Closing",
      "code": "61",
      "deductions": [
        {
          "chinese": "手指触及剑刃",
          "english": "Any finger wraps around the top of the hand guard and touches the edge of the blade"
        },
        {
          "chinese": "开扇时手未握扇骨底部扇面未完全展开，臂与扇大骨未呈一直线",
          "english": "When opening up the fan, the hand is not holding the bottom of the fan ribs, the fan surface is not fully opened (less than 180°), and the fan's major ribs is not aligned with the arm when the fan surface is opened"
        },
        {
          "chinese": "合扇时两扇大骨未合拢",
          "english": "The two major ribs are not closed together when the fan is fully collapsed"
        }
      ]
    },
    "刺扇": {
      "chinese": "刺扇",
      "pinyin": "Cì Shàn",
      "english": "Fan Thrust",
      "code": "63",
      "deductions": [
        {
          "chinese": "臂与扇骨未呈一直线",
          "english": "Arm and fan are not aligned"
        }
      ]
    },
    "劈扇": {
      "chinese": "劈扇",
      "pinyin": "Pī Shàn",
      "english": "Fan Chop",
      "code": "63",
      "deductions": [
        {
          "chinese": "臂与扇骨未呈一直线",
          "english": "Arm and fan are not aligned"
        }
      ]
    },
    "抛接扇": {
      "chinese": "抛接扇",
      "pinyin": "Pāo Jiē Shàn",
      "english": "Fan Toss/Throw & Catch",
      "code": "66",
      "deductions": [
        {
          "chinese": "未单手接握扇骨底部",
          "english": "Failure to catch the fan by the bottom/handle with a single hand"
        }
      ]
    },
    "绞剑": {
      "chinese": "绞剑",
      "pinyin": "Jiǎo Jiàn",
      "english": "Straight Sword Enveloping",
      "code": "68",
      "deductions": [
        {
          "chinese": "剑尖绕环未明显呈立圆",
          "english": "Tip of the straight sword not travelling in a clearly- defined vertical circle"
        }
      ]
    },
    "点扇": {
      "chinese": "点扇",
      "pinyin": "Diǎn Shàn",
      "english": "Fan Pointing",
      "code": "69",
      "deductions": [
        {
          "chinese": "手腕未明显上提",
          "english": "No obvious wrist lift"
        }
      ]
    }
  },
  "duilian_deductions": {
    "方法": {
      "chinese": "方法",
      "english": "Method",
      "deductions": [
        {
          "chinese": "远离或偏离进攻部位",
          "english": "Attack goes wide or off target area",
          "code": "90"
        },
        {
          "chinese": "静止姿势超过3秒钟",
          "english": "Motionless state held for more than 3 seconds",
          "code": "91"
        },
        {
          "chinese": "无攻防演练超过3秒钟",
          "english": "Duration without attack and defense exceeds 3 seconds",
          "code": "92"
        }
      ]
    },
    "配合": {
      "chinese": "配合",
      "english": "Co-Operation",
      "deductions": [
        {
          "chinese": "击打落空或防守落空",
          "english": "Misses in attack or defense",
          "code": "93"
        },
        {
          "chinese": "等待对方进攻",
          "english": "Waiting for partner to attack",
          "code": "94"
        },
        {
          "chinese": "误中对方",
          "english": "Mishit on Partner/s",
          "code": "95"
        }
      ]
    }
  },
  "difficulty_non_conformity": {
    "balance_techniques": [
      {
        "technique": "低势前蹬踩脚平衡",
        "english": "Forward Sole Kick with Low Step Balance",
        "criteria": [
          "支撑腿大腿高于水平 - Thigh of supporting leg above horizontal level",
          "蹬踩腿未由曲到伸 - The extended kicking leg does not transit from obvious bent to completely straight",
          "蹬踩脚触地 - Foot of the extended kicking leg touches the carpet"
        ]
      },
      {
        "technique": "前举腿低势平衡/后插腿低势平衡",
        "english": "Low Balance with Leg Stretched Forward/Low Balance with Leg Crossed Behind",
        "criteria": [
          "支撑腿大腿高于水平 - Thigh of supporting leg above horizontal level",
          "手扶按支撑腿 - Hand is supporting/pressing on the supporting leg"
        ]
      }
    ],
    "leg_techniques": [
      {
        "technique": "分脚/蹬脚",
        "english": "Parting Kick/Heel Kick",
        "criteria": [
          "上举腿脚跟低于肩 - Heel of the kicking leg is below shoulder level"
        ]
      }
    ],
    "jumping_techniques": [
      {
        "technique": "腾空飞脚",
        "english": "Jumping Front Slap Kick",
        "criteria": [
          "助跑超过1步 - Exceeding 1 run-up step",
          "未腾空 - Not Executed in the air",
          "击响腿低于水平 - Slapped foot lower than horizontal level"
        ]
      },
      {
        "technique": "腾空正踢腿",
        "english": "Jumping Front Straight Kick",
        "criteria": [
          "助跑超过1步 - Exceeding 1 run-up steps",
          "未腾空 - Not executed in the air",
          "上踢腿脚尖未触及或未超过前额 - The toes of the kicking leg do not touch or did not exceed the forehead"
        ]
      },
      {
        "technique": "旋风脚/腾空摆莲",
        "english": "Tornado Kick/Jumping Lotus Kick",
        "criteria": [
          "助跑超过1步 - Exceeding 1 run-up step",
          "未腾空 - Not Executed in the air",
          "转体度数不足 - Insufficient degree of rotation",
          "击响腿低于水平 - Slapped foot lower than horizontal level"
        ]
      }
    ],
    "difficulty_connections": {
      "dynamic_dynamic": [
        {
          "connection": "腾空飞脚+腾空摆莲360°/450°/540°",
          "english": "Jumping Front Slap Kick + Jumping Lotus Kick 360°/450°/540°",
          "criteria": [
            "跳跃动作之间出现助跑 - Occurrence of run-up step in between the 2 jumping techniques"
          ]
        }
      ],
      "dynamic_static": [
        {
          "connection": "各种跳跃+单脚落地",
          "english": "Various jumping techniques + single foot landing",
          "criteria": [
            "击响（踢起）腿未单脚落地 - The kicking/slapped foot is not the same leg which is singerly landed on",
            "脚移动或跳动 - Foot shuffles or skips"
          ]
        },
        {
          "connection": "跳跃+提膝独立",
          "english": "Jumping techniques + Single Raised-Knee Stance",
          "criteria": [
            "击响（踢起）腿未单脚落地 - The kicking/slapped foot is not the same leg which is singerly landed on",
            "脚移动或跳动 - Foot shuffles or skips",
            "提膝腿脚触地 - The foot of the raised knee touches the ground"
          ]
        },
        {
          "connection": "腾空摆莲+跌叉",
          "english": "Jumping Lotus Kick + Hurdler's Split Position",
          "criteria": [
            "两腿依次落地 - The feet land alternately (not simultaneously)",
            "腿移动 - Foot shuffles",
            "附加支撑 - Use of additional support",
            "倒地 - Fall"
          ]
        }
      ],
      "static_dynamic": [
        {
          "connection": "低势平衡+踢腿",
          "english": "Low Balance + Kicks",
          "criteria": [
            "连接过程中躯干晃动 - The torso sways during the transition",
            "提起腿脚触地 - Foot of the raised leg touches the floor",
            "支撑腿脚移动或跳动 - Supporting foot shuffles or skips"
          ]
        }
      ],
      "static_static": [
        {
          "connection": "低势平衡+转体180°成提膝独立",
          "english": "Low Balance + 180° Turn into Single Raised-Knee Stance",
          "criteria": [
            "连接过程中出现躯干晃动 - The torso sways during the transition",
            "转体度数不足 - Insufficient degree of rotation",
            "连接过程中提膝低于水平 - The knee dips below horizontal level during the transition",
            "提膝腿脚触地 - The foot of the raised knee touches the ground",
            "提膝时脚移动或跳动 - Foot shuffles or skips during the single knee raised"
          ]
        }
      ]
    }
  },
  "rotation_calculation": {
    "jumping_to_split": "For Degree of Difficulty jumping techniques with rotation followed by the difficulty connection Diē Chà (Hurdler's Split Position), the calculation of degree of rotation is based on the angle formed by the extended toe-to-heel line of the jumping foot (the foot that is on the same side of the body as the direction in which it is rotating) at the time of takeoff and the angle formed by the extended line of the extended leg at the time of landing.",
    "single_foot_landing": "For jumping techniques with rotation that land on a single foot, the calculation of degree of rotation is based on the angle formed by the extended toe-to-heel line of the landing foot at the time of takeoff and that at the time of landing.",
    "static_static_connections": "For Static + Static Connections, to calculate the degree of rotation, it is based on the angle formed by the extended toe-to-heel line of the supporting foot before the rotation and the angle formed after the rotation."
  },
  "run_up_standards": {
    "immediate_execution": "For the combinations 312A+324B, 312A+324C, the second jumping technique must be executed directly after landing with both feet from the previous jumping technique.",
    "static_connections": "No steps may be taken during the execution of a static + static connection."
  },
  "connection_requirements": {
    "split_position": "For the combination 312A+324B (or 324C), the landing connection must be Diē Chà (Hurdler's Split Position) with the left leg extended forward.",
    "split_limitation": "The Degree of Difficulty connection Diē Chà (Hurdler's Split Position) may at most be selected once per routine.",
    "weapon_techniques": "When completing the Dynamic + Static Connection of taijiquan category weapon routines, the weapon techniques should be clear and correct (They should be selected from the main techniques of Taijiquan category)."
  },
  "evaluation_standards": {
    "incomplete_difficulty": "Should a Degree of Difficulty technique be unsuccessfully executed, its preceding or the following Degree of Difficulty connection may not be confirmed.",
    "modified_connection": "Should an executed Degree of Difficulty connection differ from what was registered, then both the Degree of Difficulty technique and its connections may not be confirmed.",
    "single_foot_landing": "For difficulty movements of connections landing on a single foot, the foot landed on should be the same foot that is kicked and slapped.",
    "balance_requirement": "The balance techniques and connection between dynamic and static techniques must be executed in a motionless state.",
    "technical_movements": "Upon completing a Dynamic + Static Degree of Difficulty connection technique, one must complete two or more technical movements prior to executing another set of Degree of Difficulty technique."
  }
};