/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '炫凝宝宝！早上好❤~',
    desc: `
      *🗓️{{date.DATA}}

今天是我们在一起的第{{love_day.DATA}}天，爱你❤️

今日{{city.DATA}}天气☁️：{{tian_api_weather_weather_0.DATA}}
温度🌡️: {{tian_api_weather_lowest_0.DATA}}-{{tian_api_weather_highest_0.DATA}}
紫外线强度指数☀️: {{tian_api_weather_uv_index_0.DATA}}
穿衣指数👚: {{tian_api_weather_tips_0.DATA}}

💌{{earthy_love_words.DATA}}

    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
