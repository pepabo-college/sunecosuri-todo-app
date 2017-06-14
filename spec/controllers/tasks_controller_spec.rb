require 'rails_helper'

RSpec.describe "TasksController", type: :controller do
  describe 'GET #index' do
    it "index.html.erbテンプレートが表示されること" do
      get :index
      expect(response).to render_template :index
    end
  end

  describe 'GET #new' do
    it '@taskに新規Taskオブジェクトが格納される' do
      expect(assigns(:task)).to be_a_new(Task)
    end
  end


  describe 'GET #show' do
    it "show.html.erbが表示される" do
      task = create(:task)
      get :show, {id: task.id}
      expect(response).to render_template :show
    end
  end

  describe 'GET #edit' do
    it "edit.html.erbテンプレートが表示されること" do
      task = create(:task)
      get :edit, params: {id: task.id}
      expect(response).to render_template :edit
    end


  end
end
