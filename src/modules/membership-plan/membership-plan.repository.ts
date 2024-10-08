import { MEMBERSHIP_PLANS_URL, apiClient } from '@/api-client.ts';
import {
  CreateMembershipPlanData,
  MembershipPlan,
  UpdateMembershipPlanData,
} from '@/modules/membership-plan';
import { AxiosInstance } from 'axios';

export class MembershipPlanRepository {
  private readonly apiClient: AxiosInstance;

  constructor() {
    this.apiClient = apiClient;
  }

  async getAll(): Promise<MembershipPlan[]> {
    const response =
      await this.apiClient.get<MembershipPlan[]>(MEMBERSHIP_PLANS_URL);
    return response.data;
  }

  async create(plan: CreateMembershipPlanData): Promise<MembershipPlan> {
    const response = await this.apiClient.post<MembershipPlan>(
      MEMBERSHIP_PLANS_URL,
      plan,
    );
    return response.data;
  }

  async update(
    id: string,
    plan: UpdateMembershipPlanData,
  ): Promise<MembershipPlan> {
    const response = await this.apiClient.patch<MembershipPlan>(
      `${MEMBERSHIP_PLANS_URL}/${id}`,
      plan,
    );
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await this.apiClient.delete(`${MEMBERSHIP_PLANS_URL}/${id}`);
  }
}
