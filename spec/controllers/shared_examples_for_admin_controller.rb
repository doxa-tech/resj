shared_examples_for "an admin controller" do |object|

  context "as an authorized user" do

    before(:each) do
      @user = create(:user)
      create(:ownership, element_name: "admin/#{object.to_s.pluralize}", type_name: "all_entries",
        right_read: true, right_create: true, right_delete: true, right_update: true)
      sign_in @user
    end

    describe "GET #index" do
      let!(:response) { get :index }

      it "should allow the user" do
        expect(response).to_not redirect_to anything
      end

      it "should display all the collection" do
        record = create(factory(object))
        expect(assigns(:table).collection).to include(record)
      end
    end

    describe "GET #new" do
      let!(:response) { get :new }

      it "should allow the user" do
        expect(response).to_not redirect_to anything
      end
    end

    describe "POST #create" do
      let!(:response) { post :create, params: { hash_name(object) => object_params(object) }}

      it "should redirect to the list" do
        expect(response).to redirect_to controller_path(object)
      end

      it "should create an object" do
        expect(assigns(var_name(object))).to_not be_new_record
      end

    end

    context "edit a record" do
      let!(:record) { create(factory(object)) }

      describe "GET #edit" do
        let!(:response) { get :edit, params: { id: record.id }}

        it "should allow the user" do
          expect(response).to_not redirect_to anything
        end
      end

      describe "PATCH #update" do
        let!(:response) { patch :update, params: { id: record.id, hash_name(object) => {attribute => value} }}

        it "should redirect to the list" do
          expect(response).to redirect_to controller_path(object)
        end

        it "should update the object" do
          expect(assigns(var_name(object))[attribute]).to eq value
        end

      end

      describe "DELETE #destroy" do
        let(:response) { delete :destroy, params: { id: record.id }}

        it "should destroy the object" do
          expect{ response }.to change(model(object), :count).by(-1)
        end

        it "should redirect to the list" do
          expect(response).to redirect_to controller_path(object)
        end

      end
    end

  end

  context "as an non authorized user" do

    before(:each) do
      @user = create(:user)
      sign_in @user
    end

    describe "GET #index" do
      let!(:response) { get :index }

      it "should redirect" do
        record = create(factory(object))
        expect(response).to redirect_to connexion_path
      end
    end

    describe "GET #new" do
      let(:response) { get :new }

      it "should not allow the user" do
        expect(response).to redirect_to anything #profile_path
      end
    end

    describe "POST #create" do
      let!(:response) { post :create }

      it "should not allow the user" do
        expect(response).to redirect_to anything #profile_path
      end

      it "should not create an object" do
        expect(assigns(var_name(object))).to be_nil
      end

    end

    context "edit a record" do
      let!(:record) { create(factory(object)) }

      describe "GET #edit" do
        let!(:response) { get :edit, params: { id: record.id }}

        it "should not allow the user" do
          expect(response).to redirect_to anything #profile_path
        end
      end

      describe "PATCH #update" do
        let!(:response) { patch :update, params: { id: record.id, hash_name(object) => {attribute => value} }}

        it "should not allow the user" do
          expect(response).to redirect_to anything #profile_path
        end

        it "should not update the object" do
          expect(assigns(var_name(object))[attribute]).to_not eq value
        end

      end

      describe "DELETE #destroy" do
        let(:response) { delete :destroy, params: { id: record.id }}

        it "should not destroy the object" do
          expect{ response }.to_not change(model(object), :count)
        end

        it "should not allow the user" do
          expect(response).to redirect_to anything #profile_path
        end
      end
    end

  end

  context "as a visitor" do

    describe "GET #index" do
      let!(:response) { get :index }

      it "should redirect to the login" do
        expect(response).to redirect_to connexion_path
      end

    end

    describe "GET #new" do
      let(:response) { get :new }

      it "should redirect to the login" do
        expect(response).to redirect_to connexion_path
      end
    end

    describe "POST #create" do
      let!(:response) { post :create }

      it "should redirect to the login" do
        expect(response).to redirect_to connexion_path
      end

      it "should not create an object" do
        expect(assigns(var_name(object))).to be_nil
      end
    end

    context "edit a record" do
      let!(:record) { create(factory(object)) }

      describe "GET #edit" do
        let!(:response) { get :edit, params: { id: record.id }}

        it "should not redirect" do
          expect(response).to redirect_to connexion_path
        end
      end

      describe "POST #update" do
        let!(:response) { patch :update, params: { id: record.id, hash_name(object) => {attribute => value} }}

        it "should redirect to the login" do
          expect(response).to redirect_to connexion_path
        end

        it "should not update the object" do
          expect(assigns(var_name(object))[attribute]).to_not eq value
        end
      end

      describe "DELETE #destroy" do
        let(:response) { delete :destroy, params: { id: record.id }}

        it "should not destroy the object" do
          expect{ response }.to_not change(model(object), :count)
        end

        it "should redirect to the login" do
          expect(response).to redirect_to connexion_path
        end

      end
    end

  end

  def object_params(object)
    build(factory(object)).attributes
  end

  def model(object)
    @model ||= object.to_s.camelize.constantize
  end

  def controller_path(object)
   @controller_path ||= "/admin/#{object.to_s.pluralize}"
  end

  def attribute
    @attribute ||= :name
  end

  def hash_name(object)
    @hash_name ||= object
  end

  def factory(object)
    @factory ||= object
  end

  def var_name(object)
    @var_name ||= object
  end

  def value
    @value ||= "New string"
  end

end
