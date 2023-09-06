/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx935b1372e8cc63ce',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd2c9c89346cefee76ebe9053ac22c585',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'hzz',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oL_h96PtjaXCqxO7h1F7q_gHkLHo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GfvS8WV0cFQE2SryQb8Mz7FigznghGFo3YVe9EW-Uq4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '炫凝', year: '2003', date: '12-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '子衡', year: '2003', date: '02-06',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '02-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-03-15' },
       
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'TxlXPEnKn0FGlu3ospLBEC7aOKQ5Zyo6yu52DnE0pts',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oL_h96LhWSzNAcSrZbDeyrM0JTJA',
    }
  ],

}

module.exports = USER_CONFIG

