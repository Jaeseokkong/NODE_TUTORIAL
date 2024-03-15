'use strict';
module.exports = {
    // 테이블 생성
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Leads', {
            //필드 정의
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            }, 
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            } 
        })
    },
    // 테이블 삭제
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Leads');
    }
}