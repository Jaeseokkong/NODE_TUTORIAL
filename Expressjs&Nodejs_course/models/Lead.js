// migrations 테이블 정의 자체를 조작 (테이블 생성 컬럼 수정 등 ..)

'use strict'
module.exports = (sequelize, DataTypes) => {
    const Lead = sequelize.define('Lead', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Lead;
}