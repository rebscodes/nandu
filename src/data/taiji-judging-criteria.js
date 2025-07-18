// Taijiquan, Taijijian, and Taijishan deduction and non-conformity criteria based on IWUF rules
import { taijiDeductions } from './shared/taiji-juding-criteria.js';

// Convert taiji format to match the standard format used by northern/southern
export const judgingCriteria = {
  general_rules: {
    deduction_amount: 0.1,
    description: "Within a single technique, should there be 1 or more errors, 0.1 point will be deducted once.",
    additional_rules: taijiDeductions.deduction_standards.general_rules
  },
  hand_forms: {
    "拳": taijiDeductions.movements["拳"],
    "掌": taijiDeductions.movements["掌"],
    "剑指": taijiDeductions.movements["剑指"],
    "手法": taijiDeductions.movements["手法"]
  },
  body_posture: {
    "身型": taijiDeductions.movements["身型"]
  },
  balance_techniques: {
    "低势前蹬踩脚平衡": taijiDeductions.movements["低势前蹬踩脚平衡"],
    "前举腿低势平衡": taijiDeductions.movements["前举腿低势平衡"],
    "后插腿低势平衡": taijiDeductions.movements["后插腿低势平衡"]
  },
  leg_techniques: {
    "跌叉": taijiDeductions.movements["跌叉"],
    "分脚": taijiDeductions.movements["分脚"],
    "蹬脚": taijiDeductions.movements["蹬脚"],
    "摆莲拍脚": taijiDeductions.movements["摆莲拍脚"],
    "单拍脚": taijiDeductions.movements["单拍脚"]
  },
  stances: {
    "提膝独立": taijiDeductions.movements["提膝独立"],
    "弓步": taijiDeductions.movements["弓步"],
    "马步": taijiDeductions.movements["马步"],
    "虚步": taijiDeductions.movements["虚步"],
    "仆步": taijiDeductions.movements["仆步"]
  },
  footwork: {
    "上步": taijiDeductions.movements["上步"],
    "退步": taijiDeductions.movements["退步"],
    "进步": taijiDeductions.movements["进步"],
    "跟步": taijiDeductions.movements["跟步"],
    "侧行步": taijiDeductions.movements["侧行步"]
  },
  jumping_techniques: {
    "腾空飞脚": taijiDeductions.movements["腾空飞脚"],
    "旋风脚": taijiDeductions.movements["旋风脚"],
    "腾空摆莲": taijiDeductions.movements["腾空摆莲"],
    "腾空正踢腿": taijiDeductions.movements["腾空正踢腿"]
  },
  weapon_techniques: {
    "挂剑": taijiDeductions.movements["挂剑"],
    "撩剑": taijiDeductions.movements["撩剑"],
    "挂扇": taijiDeductions.movements["挂扇"],
    "撩扇": taijiDeductions.movements["撩扇"],
    "握剑": taijiDeductions.movements["握剑"],
    "开扇": taijiDeductions.movements["开扇"],
    "合扇": taijiDeductions.movements["合扇"],
    "刺扇": taijiDeductions.movements["刺扇"],
    "劈扇": taijiDeductions.movements["劈扇"],
    "抛接扇": taijiDeductions.movements["抛接扇"],
    "绞剑": taijiDeductions.movements["绞剑"],
    "点扇": taijiDeductions.movements["点扇"]
  },
  duilian_deductions: taijiDeductions.duilian_deductions,
  difficulty_non_conformity: taijiDeductions.difficulty_non_conformity,
  rotation_calculation: taijiDeductions.rotation_calculation,
  run_up_standards: taijiDeductions.run_up_standards,
  connection_requirements: taijiDeductions.connection_requirements,
  evaluation_standards: taijiDeductions.evaluation_standards
};