require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  describe 'GET #create' do
    context '空白でsaveしたとき' do
      it 'トップにリダイレクトすること' do
        expect(responce).to redirect_to(root_path)
      end
    end
  end
end
