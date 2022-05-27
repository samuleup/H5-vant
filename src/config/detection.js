switch (process.env.VUE_APP_TITLE) {
    case 'sit':
        console.log('测试环境,地址:http://localhost:3002');
        break;
    case 'pro':
        console.log('生产环境,地址:http://localhost:3003');
        break;
    default:
        console.log('开发环境,地址:http://localhost:3001');
}